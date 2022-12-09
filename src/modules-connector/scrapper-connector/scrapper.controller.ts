import { Body, Controller, Get, Post } from "@nestjs/common";
import { AdminAccess } from "../../users/auth.decorators";
import { ScrapperService } from "./scrapper.service";
import { handleException } from "../../main";

@Controller('scrapper')
@AdminAccess
export class ScrapperController {
  constructor(private scrapperService: ScrapperService) {}

  @Post('request')
  requestJob(@Body() payload: any) {
    return this.scrapperService.requestJob(payload).then((it) => {
      return {
        status: 'ok',
        response: it,
      };
    }).catch(error => {
      handleException(error)
      return {
        status: "error",
        response: error
      }
    });
  }

  @Get('status')
  getStatus() {
    return this.scrapperService.getScrapperStatus();
  }
}
