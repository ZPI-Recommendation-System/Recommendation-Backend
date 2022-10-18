import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ControlEntity {
  @PrimaryColumn()
  controlName: string;
}
