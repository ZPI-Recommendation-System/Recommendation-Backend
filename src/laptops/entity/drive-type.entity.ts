import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class DriveTypeEntity {
  @PrimaryColumn()
  driveType: string;
}
