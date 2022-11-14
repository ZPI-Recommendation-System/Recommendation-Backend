import { Injectable } from "@nestjs/common";
import {
  SCRAPPER_AUTH_REQUEST,
  SCRAPPER_WORK_STATUS,
  ScrapperAuthRequestDto,
  ScrapperWorkStatusDto
} from "./websocket.events";
import { EventEmitter2 } from "@nestjs/event-emitter";

@Injectable()
export class WebsocketService {
  authToken = 'ABCDEFGHIJK';

  constructor(private eventEmmiter: EventEmitter2){}

  checkAuth(token: string) {
    return token === this.authToken;
  }

  authRequest(data: ScrapperAuthRequestDto) {
    if(data && data.timeout !== undefined && data.authLink)
    {
      this.eventEmmiter.emit(SCRAPPER_AUTH_REQUEST, data);
      return true;
    }
    else{
      return false
    }
  }

  workStatusUpgrade(data: ScrapperWorkStatusDto) {
    if(data.workStatus) {
      this.eventEmmiter.emit(SCRAPPER_WORK_STATUS, data);
      return true;
    }
    return false;
  }
}
