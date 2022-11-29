import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { ProcessorEntity } from "./processor.entity";
import { ScreenEntity } from "./screen.entity";
import { GraphicsEntity } from "./graphics.entity";
import { ConnectionEntity } from "./connection.entity";
import { MultimediaEntity } from "./multimedia.entity";
import { CommunicationEntity } from "./communication.entity";
import { ControlEntity } from "./control.entity";
import { DriveTypeEntity } from "./drive-type.entity";
import { ModelImgEntity } from "./model-img.entity";

export type PriceSource = 'allegro' | 'generated' | 'unknown';

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

  @Column({ nullable: true, type: 'float' })
  batterySizeWH: number;

  @Column({ nullable: true, type: 'float' })
  batterySizeMAH: number;

  @Column({ nullable: true, type: 'float' })
  batteryTime: number;

  @Column({ nullable: true })
  color: string;

  @Column({ nullable: true, type: 'float' })
  width: number;

  @Column({ nullable: true, type: 'float' })
  length: number;

  @Column({ nullable: true, type: 'float' })
  depth: number;

  @Column({ nullable: true, type: 'float' })
  weight: number;

  @ManyToOne(() => ProcessorEntity, { cascade: ['insert'] })
  @JoinColumn()
  processor: ProcessorEntity;

  @ManyToOne(() => ScreenEntity, { cascade: ['insert'] })
  @JoinColumn()
  screen: ScreenEntity;

  @Column('float')
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

  @Column('float')
  price: number;

  @Column({ default: 'unknown' })
  priceSource: PriceSource;

  @ManyToOne(() => GraphicsEntity, { cascade: ['insert'] })
  @JoinColumn()
  graphics: GraphicsEntity;

  @ManyToMany(() => ConnectionEntity, { nullable: true, cascade: ['insert'] })
  @JoinTable()
  connections: ConnectionEntity[];

  @ManyToMany(() => MultimediaEntity, { nullable: true, cascade: ['insert'] })
  @JoinTable()
  multimedia: MultimediaEntity[];

  @ManyToMany(() => CommunicationEntity, {
    nullable: true,
    cascade: ['insert'],
  })
  @JoinTable()
  communications: CommunicationEntity[];

  @ManyToMany(() => ControlEntity, { nullable: true, cascade: ['insert'] })
  @JoinTable()
  controls: ControlEntity[];

  @ManyToMany(() => DriveTypeEntity, { nullable: true, cascade: ['insert'] })
  @JoinTable()
  drives: DriveTypeEntity[];

  @ManyToMany(() => ModelImgEntity, { cascade: ['insert'] })
  @JoinTable()
  images: ModelImgEntity[];
}
