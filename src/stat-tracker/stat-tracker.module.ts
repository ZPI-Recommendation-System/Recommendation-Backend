import { TypeOrmModule } from "@nestjs/typeorm";
import { StatTrackerEntity } from "./stat-tracker.entity";
import { Module } from "@nestjs/common";
import { StatTrackerController } from "./stat-tracker.controller";
import { StatTrackerService } from "./stat-tracker.service";

@Module({
  imports: [TypeOrmModule.forFeature([StatTrackerEntity])],
  controllers: [StatTrackerController],
  providers: [StatTrackerService]
})
export class StatTrackerModule{}
