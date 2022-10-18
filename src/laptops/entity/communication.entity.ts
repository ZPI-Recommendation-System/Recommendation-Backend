import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class CommunicationEntity {
  @PrimaryColumn()
  communicationName: string;
}
