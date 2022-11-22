import { Body, Controller, Post } from "@nestjs/common";
import { StatTrackerEntity } from "./stat-tracker.entity";
import { StatTrackerService } from "./stat-tracker.service";


@Controller("stats")
export class StatTrackerController{

  constructor(private statTrackerService: StatTrackerService){}

  @Post()
  postStat(@Body() statTrackerEntity: StatTrackerEntity)
  {
    return this.statTrackerService.postStat(statTrackerEntity).then((it)=>{
      return {
        "status": it
      }
    })
  }



}
