import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { ProcessorEntity } from "./processor.entity";
import { ScreenEntity } from "./screen.entity";
import { GraphicsEntity } from "./graphics.entity";
import { ConnectionEntity } from "./connection.entity";
import { MultimediaEntity } from "./multimedia.entity";
import { CommunicationEntity } from "./communication.entity";
import { ControlEntity } from "./control.entity";
import { OfferEntity } from "./offer.entity";
import { BenchmarkEntity } from "./benchmark.entity";
import { DriveTypeEntity } from "./drive-type.entity";
import { ModelImgEntity } from "./model-img.entity";

@Entity()
export class ModelEntity {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  model: string;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: true })
  producentCode: string;

  @Column({ nullable: true, type: "float" })
  batterySizeWH: number;

  @Column({ nullable: true, type: "float" })
  batterySizeMAH: number;

  @Column({ nullable: true, type: "float" })
  batteryTime: number;

  @Column({ nullable: false })
  drive: string;

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
  processor: ProcessorEntity;

  @ManyToOne(() => ScreenEntity)
  screen: ScreenEntity;

  @Column("float")
  ramAmount: number;

  @Column()
  ramFrequency: number;

  @Column()
  ramNumberOfSlots: number;

  @Column()
  ramNumberOfFreeSlots: number;

  @Column()
  ramType: string;

  @Column()
  ramMaxAmount: number;

  @Column()
  driveStorage: number;

  @Column()
  driveType: string;

  @Column({ nullable: true })
  hddSpeed: string;

  @ManyToOne(() => GraphicsEntity)
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

  @OneToMany(() => OfferEntity, (offer) => offer.model)
  offers: OfferEntity[];

  @OneToOne(() => BenchmarkEntity, { nullable: true })
  benchmark: BenchmarkEntity;

  @ManyToMany(() => DriveTypeEntity, { nullable: true })
  @JoinTable()
  drives: DriveTypeEntity[];

  @ManyToMany(() => ModelImgEntity)
  @JoinTable()
  images: ModelImgEntity[];
}
