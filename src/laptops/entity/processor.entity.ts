import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ProcessorEntity {
  @PrimaryColumn()
  model: string;

  @Column()
  series: string;

  @Column()
  cores: number;

  @Column("float")
  frequency: number;


}
