import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class MultimediaEntity {
  @PrimaryColumn()
  multimediaName: string;
}
