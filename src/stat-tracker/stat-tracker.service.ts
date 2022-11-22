import { InjectRepository } from "@nestjs/typeorm";
import { StatTrackerEntity } from "./stat-tracker.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { handleException } from "../main";

@Injectable()
export class StatTrackerService {
  constructor(
    @InjectRepository(StatTrackerEntity)
    private statTrackerRepo: Repository<StatTrackerEntity>,
  ) {}

  async postStat(statTracker: StatTrackerEntity): Promise<string> {
    if (statTracker && statTracker.eventType) {
      statTracker.id = undefined;
      statTracker.timestamp = new Date();
      return this.statTrackerRepo
        .save(statTracker)
        .then(() => 'ok')
        .catch((error) => {
          handleException(error);
          return 'error';
        });
    } else {
      return 'error';
    }
  }
}
