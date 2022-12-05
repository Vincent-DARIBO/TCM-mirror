import { CreateBlockedInput } from './create-blocked.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBlockedInput extends PartialType(CreateBlockedInput) {
  @Field(() => Int)
  id: number;
}
