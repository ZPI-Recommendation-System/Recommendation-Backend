import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StorageEntity {
  @PrimaryGeneratedColumn()
  driveId: number;

  @Column()
  driveStorage: number;

  @Column()
  driveType: string;

  @Column({ nullable: true })
  hddSpeed: string;
}
