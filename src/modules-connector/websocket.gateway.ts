import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway
} from "@nestjs/websockets";
import {
  SCRAPPER_AUTH_REQUEST,
  SCRAPPER_WORK_STATUS,
  ScrapperAuthRequestDto,
  ScrapperWorkStatusDto
} from "./websocket.events";

import { Socket } from "socket.io";
import { WebsocketService } from "./websocket.service";
import { Logger } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  transports: ['websocket'],
})
export class WebsocketGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  connectedScrapper: Socket;
  logger = new Logger(WebsocketGateway.name);

  constructor(private websocketService: WebsocketService) {}

  authClient(client: Socket) {
    const token =
      client.handshake.auth?.token || client.handshake.headers.authorization;
    return (
      !!token &&
      this.websocketService.checkAuth(token) &&
      client.id == this.connectedScrapper?.id
    );
  }
  test: 'ready' | 'in_progress' | 'cancelled' | 'completed';
  requestWrapper: { authStatus: string; authResponse: any } = {
    authStatus: 'ready',
    authResponse: undefined,
  };

  timeout = 10000;

  @OnEvent(SCRAPPER_AUTH_REQUEST)
  async scrapperAuthRequest(): Promise<any> {
    if (this.requestWrapper.authStatus == 'in_progress') {
      return { status: 'in_progress', auth_link: '' };
    }
    if (this.connectedScrapper) {
      this.requestWrapper.authStatus = 'in_progress';
      if (
        this.connectedScrapper.emit(SCRAPPER_AUTH_REQUEST, undefined, (it) => {
          this.logger.debug('RESPONSE!');
          if (this.requestWrapper.authStatus !== 'cancelled') {
            this.requestWrapper.authResponse = it;
            this.requestWrapper.authStatus = 'completed';
          }
        })
      ) {
        const start = Date.now();
        this.logger.debug('WAITING FOR ACC...');
        while (
          this.requestWrapper.authStatus !== 'completed' &&
          Date.now() - start < this.timeout
        ) {
          await new Promise((f) => setTimeout(f, 500));
        }
        if (this.requestWrapper.authStatus === 'completed') {
          this.requestWrapper.authStatus = 'ready';
          return this.requestWrapper.authResponse;
        } else {
          this.requestWrapper.authStatus = 'cancelled';
          return { status: 'no_response', auth_link: '' };
        }
      } else {
        return { status: 'request_error', auth_link: '' };
      }
    } else {
      return { status: 'disconnected', auth_link: '' };
    }
  }

  @SubscribeMessage(SCRAPPER_WORK_STATUS)
  scrapperWorkStatus(
    @MessageBody() data: ScrapperWorkStatusDto,
    @ConnectedSocket() client: Socket,
  ) {
    try {
      if (this.authClient(client)) {
        return this.websocketService.workStatusUpgrade(data) ? 'ok' : 'invalid';
      } else {
        this.logger.warn("Can't authorise the client! Disconnecting...");
        client.disconnect();
        return 'unauthorised';
      }
    } catch (e) {
      this.logger.error(
        'Error while processing event ' +
          SCRAPPER_WORK_STATUS +
          ' With body ' +
          JSON.stringify(data),
      );
      this.logger.error(e);
    }
  }

  @SubscribeMessage(SCRAPPER_AUTH_REQUEST)
  authRequestStart(
    @MessageBody() data: ScrapperAuthRequestDto,
    @ConnectedSocket() client: Socket,
  ): string {
    this.logger.debug(SCRAPPER_AUTH_REQUEST);
    if (this.authClient(client)) {
      this.logger.debug('AUTH COMPLETED');
      return this.websocketService.authRequest(data) ? 'ok' : 'invalid';
    } else {
      this.logger.warn("Can't authorise the client! Disconnecting...");
      client.disconnect();
      return 'invalid';
    }
  }

  handleConnection(client: Socket, ...args: any[]): any {
    const token =
      client.handshake.auth?.token || client.handshake.headers.authorization;
    this.logger.debug(
      client.conn.remoteAddress + ' trying to connect with token ' + token,
    );

    if (token && this.websocketService.checkAuth(token)) {
      this.connectedScrapper = client;
      this.logger.debug('Auth success!!');
    } else {
      this.logger.debug('Auth failed...');
      client.disconnect(true);
    }
  }

  handleDisconnect(client: Socket): any {
    if (this.connectedScrapper && this.connectedScrapper.id == client.id) {
      this.connectedScrapper = undefined;
    }
  }
}
