import { Injectable, Logger } from "@nestjs/common";
import { SCRAPPER_AUTH_REQUEST, ScrapperAuthRequestDto } from "../websocket.events";
import { EventEmitter2 } from "@nestjs/event-emitter";

@Injectable()
export class ScrapperService {
  currentScraperAuthRequest: ScrapperAuthRequestDto;
  logger = new Logger(ScrapperService.name);
  constructor(private eventEmmiter: EventEmitter2) {}

  // @OnEvent(SCRAPPER_AUTH_REQUEST)
  // scrapperAuthRequest(data: ScrapperAuthRequestDto) {
  //   this.logger.debug('Scrapper data request');
  //   this.logger.debug(data);
  //   if (data.authLink && data.timeout !== undefined) {
  //     this.currentScraperAuthRequest = data;
  //     return true;
  //   }
  //   return false;
  // }

  getAuthLink() {
    return !!this.currentScraperAuthRequest
      ? this.currentScraperAuthRequest.authLink
      : 'unknown';
  }

  async requestAuthLink(): Promise<string> {
    return this.eventEmmiter.emitAsync(SCRAPPER_AUTH_REQUEST).then((it) => {
      if (it) {
        return it[0];
      } else {
        return 'event_error';
      }
    });
  }
}
