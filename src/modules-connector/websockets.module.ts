import { Module } from "@nestjs/common";
import { WebsocketGateway } from "./websocket.gateway";
import { ScrapperModule } from "./scrapper-connector/scrapper.module";
import { WebsocketService } from "./websocket.service";

@Module({
  imports: [ScrapperModule],
  providers: [WebsocketGateway, WebsocketService],
})
export class WebsocketsModule {}
