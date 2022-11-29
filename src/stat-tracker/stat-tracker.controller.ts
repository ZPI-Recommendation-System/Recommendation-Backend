import { Body, Controller, Post } from "@nestjs/common";
import { StatTrackerService } from "./stat-tracker.service";
import { StatTrackerDto } from "./stat-tracker.dto";

@Controller('stats')
export class StatTrackerController {
  constructor(private statTrackerService: StatTrackerService) {}

  @Post()
  postStat(@Body() statTrackerEntity: StatTrackerDto) {
    return this.statTrackerService.postStat(statTrackerEntity).then((it) => {
      return {
        status: it,
      };
    });
  }
}
