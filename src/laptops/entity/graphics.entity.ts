import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class GraphicsEntity {
  @PrimaryColumn()
  graphicsCardModel: string;

  @Column({ nullable: true })
  graphicsCardType: string;

  @Column({ nullable: true })
  graphicsCardVRam: number;
}
