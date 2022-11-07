import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ScreenEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("float")
  diagonalScreenInches: number;

  @Column({ nullable: true })
  resolution: string;

  @Column({ nullable: true })
  screenFinish: string;

  @Column({ nullable: true })
  screenType: string;

  @Column({ nullable: true })
  refreshRate: number;

  @Column({ nullable: true })
  touchScreen: boolean;
}
