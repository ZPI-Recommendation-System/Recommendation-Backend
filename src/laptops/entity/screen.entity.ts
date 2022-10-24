import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ScreenEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("float")
  diagonalScreenInches: number;

  @Column()
  resolution: string;

  @Column()
  screenFinish: string;

  @Column()
  screenType: string;

  @Column()
  refreshRate: number;

  @Column()
  touchScreen: boolean;
}
