import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { EventType } from 'src/types';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class Event {
  @PrimaryGeneratedColumn()
  @Field(() => String, { description: 'event id' })
  id: number;

  @Column()
  @Field(() => String, { description: 'event name' })
  name: string;

  @Column()
  @Field(() => String, { description: 'event description' })
  description: string;

  @Column()
  @Field(() => String, { description: 'event location' })
  location: string;

  @Column()
  @Field(() => Int, { description: 'event maximum amount of participants' })
  maxParticipants: number;

  @Column()
  @Field(() => Date, { description: 'creation date' })
  creationDate: Date;

  @Column()
  @Field(() => Date, { description: 'event date' })
  eventDate: Date;

  @Column({
    type: 'enum',
    enum: EventType,
    default: EventType.ACTIVITY,
  })
  @Field(() => EventType, { description: 'event type' })
  type: EventType;

  @ManyToOne(() => User, (user) => user.events)
  @Field(() => User, { description: 'event creator' })
  creator: User;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'userInEvents',
    joinColumn: {
      name: 'event',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user',
      referencedColumnName: 'uuid',
    },
  })
  participants: User[];
}
