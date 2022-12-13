import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { AdminAccess } from "../../users/auth.decorators";
import { JobRequest, ScrapperService } from "./scrapper.service";
import { handleException } from "../../main";


@Controller('jobs')
@AdminAccess
export class ScrapperController {
  constructor(private scrapperService: ScrapperService) {}

  @Post('request')
  requestJob(@Body() payload: JobRequest) {
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

  @Get('status/:name')
  getStatus(@Param('name') name) {
    return this.scrapperService.getScrapperStatus(name);
  }

  @Get('logs')
  getLogs() {
    return this.scrapperService.getLogs();
  }
}
