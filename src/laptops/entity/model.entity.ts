import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { ProcessorEntity } from "./processor.entity";
import { ScreenEntity } from "./screen.entity";
import { GraphicsEntity } from "./graphics.entity";
import { ConnectionEntity } from "./connection.entity";
import { MultimediaEntity } from "./multimedia.entity";
import { CommunicationEntity } from "./communication.entity";
import { ControlEntity } from "./control.entity";
import { OfferEntity } from "./offer.entity";
import { DriveTypeEntity } from "./drive-type.entity";
import { ModelImgEntity } from "./model-img.entity";

@Entity()
export class ModelEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  model: string;

  @Column({ nullable: true })
  type: string;

  @Column({ nullable: true })
  producentCode: string;

  @Column({ nullable: true, type: "float" })
  batterySizeWH: number;

  @Column({ nullable: true, type: "float" })
  batterySizeMAH: number;

  @Column({ nullable: true, type: "float" })
  batteryTime: number;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true, type: "float" })
  width: number;

  @Column({ nullable: true, type: "float" })
  length: number;

  @Column({ nullable: true, type: "float" })
  depth: number;

  @Column({ nullable: true, type: "float" })
  weight: number;

  @ManyToOne(() => ProcessorEntity)
  @JoinColumn()
  processor: ProcessorEntity;

  @ManyToOne(() => ScreenEntity)
  @JoinColumn()
  screen: ScreenEntity;

  @Column("float")
  ramAmount: number;

  @Column({ nullable: true })
  ramFrequency: number;

  @Column({ nullable: true })
  ramNumberOfSlots: number;

  @Column({ nullable: true })
  ramNumberOfFreeSlots: number;

  @Column({ nullable: true })
  ramType: string;

  @Column({ nullable: true })
  ramMaxAmount: number;

  @Column()
  driveStorage: number;

  @Column({ nullable: true })
  driveType: string;

  @Column({ nullable: true })
  hddSpeed: number;

  @ManyToOne(() => GraphicsEntity)
  @JoinColumn()
  graphics: GraphicsEntity;

  @ManyToMany(() => ConnectionEntity, { nullable: true })
  @JoinTable()
  connections: ConnectionEntity[];

  @ManyToMany(() => MultimediaEntity, { nullable: true })
  @JoinTable()
  multimedia: MultimediaEntity[];

  @ManyToMany(() => CommunicationEntity, { nullable: true })
  @JoinTable()
  communications: CommunicationEntity[];

  @ManyToMany(() => ControlEntity, { nullable: true })
  @JoinTable()
  controls: ControlEntity[];

  @OneToMany(() => OfferEntity, (offer) => offer.model, { nullable: true })
  offers: OfferEntity[];


  @ManyToMany(() => DriveTypeEntity, { nullable: true })
  @JoinTable()
  drives: DriveTypeEntity[];

  @ManyToMany(() => ModelImgEntity)
  @JoinTable()
  images: ModelImgEntity[];
}
