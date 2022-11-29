import { OmitType } from "@nestjs/swagger";
import { StatTrackerEntity } from "./stat-tracker.entity";

export class StatTrackerDto extends OmitType(StatTrackerEntity, ['id', 'timestamp'] as const) {}
