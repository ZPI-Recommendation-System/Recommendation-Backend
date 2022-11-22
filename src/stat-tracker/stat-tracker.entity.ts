import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { FormDto } from "../recommendations/dto/form.dto";

export type EventType =
  | 'allegro_click'
  | 'youtube_click'
  | 'mail_send'
  | 'link_copy'
  | 'unknown';

@Entity()
export class StatTrackerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timestamp: Date = new Date();

  @Column({ default: 'unknown' })
  eventType: EventType;

  @Column({ nullable: true })
  laptopId: string;

  @Column('simple-json', { nullable: true })
  formJson: FormDto;

  @Column('simple-json', { nullable: true })
  payload: any;
}
