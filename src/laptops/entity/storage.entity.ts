import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StorageEntity {
  @PrimaryGeneratedColumn()
  driveId: number;
}
