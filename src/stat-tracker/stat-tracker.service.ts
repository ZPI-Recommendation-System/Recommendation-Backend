import { InjectRepository } from "@nestjs/typeorm";
import { StatTrackerEntity } from "../db/entities/stat-tracker.entity";
import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { handleException } from "../main";
import { StatTrackerDto } from "./stat-tracker.dto";

@Injectable()
export class StatTrackerService {
  constructor(
    @InjectRepository(StatTrackerEntity)
    private statTrackerRepo: Repository<StatTrackerEntity>,
  ) {}

  async postStat(statTracker: StatTrackerDto): Promise<string> {
    if (statTracker && statTracker.eventType) {
      const entity = statTracker as StatTrackerEntity
      entity.id = undefined;
      entity.timestamp = new Date();
      return this.statTrackerRepo
        .save(entity)
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
