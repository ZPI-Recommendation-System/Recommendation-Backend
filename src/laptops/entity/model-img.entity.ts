import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ModelImgEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;
}
