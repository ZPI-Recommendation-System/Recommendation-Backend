import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BenchmarkEntity } from "./benchmark.entity";

@Entity()
export class GraphicsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  graphicsCardModel: string;

  @Column({ nullable: true })
  graphicsCardType: string;

  @Column({ nullable: true })
  graphicsCardVRam: number;

  @ManyToOne(() => BenchmarkEntity)
  benchmark: BenchmarkEntity;
}
