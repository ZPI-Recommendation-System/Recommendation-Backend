import { Entity, PrimaryColumn } from "typeorm";

@Entity()
export class ConnectionEntity {
  @PrimaryColumn()
  connectionName: string;
}
