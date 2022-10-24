import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ModelEntity } from "./model.entity";

@Entity()
export class OfferEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  offerName: string;

  @Column()
  offerURL: string;

  @Column()
  offerPrice: number;

  @ManyToOne(() => ModelEntity, { nullable: true })
  model: ModelEntity;
}
