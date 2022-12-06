import { InputType, Int, Field } from '@nestjs/graphql';
import { EventType } from 'src/types';
import { User } from 'src/users/entities/user.entity';

@InputType()
export class CreateEventInput {
  @Field(() => String, { description: 'event name' })
  name: string;

  @Field(() => String, { description: 'event description' })
  description: string;

  @Field(() => String, { description: 'event location' })
  location: string;

  @Field(() => Int, { description: 'event maximum amount of participants' })
  maxParticipants: number;

  @Field(() => Date, { description: 'creation date' })
  creationDate: Date;

  @Field(() => Date, { description: 'event date' })
  eventDate: Date;

  @Field(() => EventType, { description: 'event type' })
  type: EventType;

  @Field(() => User, { description: 'event creator' })
  creator: User;
}
