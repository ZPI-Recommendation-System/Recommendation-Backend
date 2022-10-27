import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BenchmarkEntity } from "./benchmark.entity";

@Entity()
export class ProcessorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  model: string;

  @Column({ nullable: true })
  series: string;

  @Column({ nullable: true })
  cores: number;

  @Column("float", { nullable: true })
  frequency: number;

  @ManyToOne(() => BenchmarkEntity, { nullable: true })
  benchmark: BenchmarkEntity;
}
