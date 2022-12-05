import { CreateMeetingInput } from './create-meeting.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMeetingInput extends PartialType(CreateMeetingInput) {
  @Field(() => Int)
  id: number;
}
