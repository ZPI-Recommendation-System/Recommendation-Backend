import { Injectable, Logger } from "@nestjs/common";
import { SCRAPPER_AUTH_REQUEST, SCRAPPER_WORK_STATUS, ScrapperWorkStatusDto, WorkStatus } from "../websocket.events";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";

export interface ScrapperStatus {
  status: WorkStatus;
  lines: string[];
  lastPayload: any;
  lastTimeEstimate: number;
}

@Injectable()
export class ScrapperService {
  logger = new Logger(ScrapperService.name);
  private scrapperStatus: ScrapperStatus = {status: "unknown", lastTimeEstimate: 0, lastPayload: undefined, lines: []};

  constructor(private eventEmmiter: EventEmitter2) {
  }

  async requestAuthLink(): Promise<string> {
    return this.eventEmmiter.emitAsync(SCRAPPER_AUTH_REQUEST).then((it) => {
      if (it) {
        return it[0];
      } else {
        return { status: 'event_error', auth_link: '' };
      }
    });
  }

  getScrapperStatus() {
    return !!this.scrapperStatus ? this.scrapperStatus : { status: 'unknown' };
  }

  @OnEvent(SCRAPPER_WORK_STATUS)
  async scrapperWorkStatusEvent(scrapperDto: ScrapperWorkStatusDto) {
    try {
      if (scrapperDto.workStatus === 'waiting_for_auth' || scrapperDto.workStatus === 'authorised') {
        this.scrapperStatus = {
          status: 'authorised',
          lines: [],
          lastPayload: undefined,
          lastTimeEstimate: undefined,
        };
      }
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
