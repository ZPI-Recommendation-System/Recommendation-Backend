import { Injectable, Logger } from "@nestjs/common";
import {

  SCRAPPER_JOB_REQUEST, SCRAPPER_WORK_STATUS,
  ScrapperWorkStatusDto,
  WorkStatus
} from "../websocket.events";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";

export interface ScrapperStatus {
  jobName: string;
  status: WorkStatus;
  lines: string[];
  lastPayload: any;
  lastTimeEstimate: number;
  lastRunStatus: string;
}

export interface JobRequest{
  jobName: string;
  payload: any;
}

@Injectable()
export class ScrapperService {
  logger = new Logger(ScrapperService.name);
  private scrapperStatus: ScrapperStatus = {jobName: "scraper", status: "unknown", lastTimeEstimate: 0, lastPayload: undefined, lines: [], lastRunStatus: "-"};
  private mlLearnStatus: ScrapperStatus = {jobName: "ml_learn", status: "unknown", lastTimeEstimate: 0, lastPayload: undefined, lines: [], lastRunStatus: "-"};
  private mlLabelStatus: ScrapperStatus = {jobName: "ml_label", status: "unknown", lastTimeEstimate: 0, lastPayload: undefined, lines: [], lastRunStatus: "-"};
  private clearDbStatus: ScrapperStatus = {jobName: "clear_db", status: "unknown", lastTimeEstimate: 0, lastPayload: undefined, lines: [], lastRunStatus: "-"};
  private logs = []

  constructor(private eventEmmiter: EventEmitter2) {
  }

  async requestJob(payload: JobRequest): Promise<string> {
    return this.eventEmmiter.emitAsync(SCRAPPER_JOB_REQUEST, payload).then((it) => {
      if (it) {
        this.logger.debug(it)
        return it[0];
      } else {
        return { status: 'error' };
      }
    });
  }

  getScrapperStatus(name: string) {
    let x;

    this.logger.debug(name)

    switch (name) {
      case "scraper":
        x = this.scrapperStatus
        break
      case "ml_learn":
        x = this.mlLearnStatus
        break
      case "ml_label":
        x = this.mlLabelStatus
        break
      case "clear_db":
        x = this.clearDbStatus
        break
    }

    this.logger.debug(x)

    return x;
  }

  @OnEvent(SCRAPPER_WORK_STATUS)
  async scrapperWorkStatusEvent(scrapperDto: ScrapperWorkStatusDto) {
    this.logger.debug("SCRAPPER_WORK_STATUS")
    this.logger.debug(scrapperDto)
    try {
      let x;

      switch (scrapperDto.jobName) {
        case "scraper":
          x = this.scrapperStatus
          break
        case "ml_learn":
          x = this.mlLearnStatus
          break
        case "ml_label":
          x = this.mlLabelStatus
          break
        case "clear_db":
          x = this.clearDbStatus
          break
      }

      x.status = scrapperDto.workStatus
      x.lines.concat(
        scrapperDto.logs,
      );
      x.lastPayload = scrapperDto.payload;
      x.lastRunStatus = scrapperDto.workStatus == "finished" ? "ok" : (scrapperDto.workStatus == "error" ? "error" : "");

      this.logs.concat(scrapperDto.logs);
      this.logger.debug(this.logs)

    } catch (e) {
      this.logger.error(e)
    }
  }

  getLogs() {
    return this.logs;
  }
}
