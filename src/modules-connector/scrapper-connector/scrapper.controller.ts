import { Controller, Get, Post } from "@nestjs/common";
import { AdminAccess } from "../../users/auth.decorators";
import { ScrapperService } from "./scrapper.service";

@Controller('scrapper')
@AdminAccess
export class ScrapperController {
  constructor(private scrapperService: ScrapperService) {}

  @Post('request')
  requestAuthLink() {
    return this.scrapperService.requestAuthLink().then((it) => {
      return {
        status: 'ok',
        response: it,
      };
    });
  }

  @Get('status')
  getStatus() {
    return this.scrapperService.getScrapperStatus();
  }
}
