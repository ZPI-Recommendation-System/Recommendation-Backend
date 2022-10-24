import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BenchmarkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column({ type: "float" })
  benchmark: number;

  @Column()
  samples: number;

  @Column()
  url: string;
}
