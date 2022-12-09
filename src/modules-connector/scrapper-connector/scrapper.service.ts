import { Injectable, Logger } from "@nestjs/common";
import { SCRAPPER_JOB_REQUEST, SCRAPPER_WORK_STATUS, ScrapperWorkStatusDto, WorkStatus } from "../websocket.events";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";

export interface ScrapperStatus {
  jobName: string;
  status: WorkStatus;
  lines: string[];
  lastPayload: any;
  lastTimeEstimate: number;
}

export interface JobRequest{
  jobName: string;
  payload: any;
}

@Injectable()
export class ScrapperService {
  logger = new Logger(ScrapperService.name);
  private scrapperStatus: ScrapperStatus = {jobName: "unknown", status: "unknown", lastTimeEstimate: 0, lastPayload: undefined, lines: []};

  constructor(private eventEmmiter: EventEmitter2) {
  }

  async requestJob(payload: JobRequest): Promise<string> {
    return this.eventEmmiter.emitAsync(SCRAPPER_JOB_REQUEST, payload).then((it) => {
      if (it) {
        return it[0];
      } else {
        return { status: 'event_error' };
      }
    });
  }

  getScrapperStatus() {
    return !!this.scrapperStatus ? this.scrapperStatus : { status: 'unknown' };
  }

  @OnEvent(SCRAPPER_WORK_STATUS)
  async scrapperWorkStatusEvent(scrapperDto: ScrapperWorkStatusDto) {
    try {
      if (scrapperDto.workStatus === 'waiting_for_job' || scrapperDto.workStatus === 'authorised') {
        this.scrapperStatus = {
          jobName: scrapperDto.jobName,
          status: scrapperDto.workStatus,
          lines: [],
          lastPayload: undefined,
          lastTimeEstimate: undefined,
        };
      }
      this.scrapperStatus.jobName = scrapperDto.jobName;
      this.scrapperStatus.status = scrapperDto.workStatus;
      this.scrapperStatus.lines = this.scrapperStatus.lines.concat(
        scrapperDto.logs,
      );
      this.scrapperStatus.lastPayload = scrapperDto.payload;
      this.scrapperStatus.lastTimeEstimate = scrapperDto.estimatedTime;
    } catch (e) {
      this.logger.error(e)
    }
  }
}
