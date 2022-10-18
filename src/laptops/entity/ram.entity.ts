import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RamEntity {
  @PrimaryGeneratedColumn()
  ramId: number;

  @Column()
  ramAmount: number;

  @Column()
  frequency: number;

  @Column()
  numberOfSlots: number;

  @Column()
  numberOfFreeSlots: number;

  @Column()
  ramType: string;
}
