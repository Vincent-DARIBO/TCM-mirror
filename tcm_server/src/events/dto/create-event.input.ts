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

  @Field(() => String, { description: 'creation date' })
  creationDate: Date;

  @Field(() => String, { description: 'event date' })
  eventDate: Date;

  @Field(() => EventType)
  type: EventType;

  @Field(() => String, { description: 'event creator' })
  creator: User;
}
