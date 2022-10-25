import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BenchmarkEntity } from "./benchmark.entity";

@Entity()
export class ProcessorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  series: string;

  @Column()
  cores: number;

  @Column("float")
  frequency: number;

  @ManyToOne(() => BenchmarkEntity)
  benchmark: BenchmarkEntity;
}
