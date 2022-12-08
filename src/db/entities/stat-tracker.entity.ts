import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { FormDto } from "../../recommendations/dto/form.dto";
import { IsIn, IsNotEmpty, ValidateNested } from "class-validator";

const EventTypes = [
  'allegro_click',
  'youtube_click',
  'mail_send',
  'link_copy',
  'unknown',
];

export type EventType = typeof EventTypes[number];

@Entity()
export class StatTrackerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  timestamp: Date = new Date();

  @Column({ default: 'unknown' })
  @IsIn(EventTypes)
  eventType: EventType;

  @Column({ nullable: true })
  @IsNotEmpty()
  laptopId: string;

  @Column('simple-json', { nullable: true })
  @ValidateNested()
  formJson: FormDto;

  @Column('simple-json', { nullable: true })
  payload: any;
}
