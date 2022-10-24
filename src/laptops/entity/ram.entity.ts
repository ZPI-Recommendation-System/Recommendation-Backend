import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RamEntity {
  @PrimaryGeneratedColumn()
  ramId: number;


}
