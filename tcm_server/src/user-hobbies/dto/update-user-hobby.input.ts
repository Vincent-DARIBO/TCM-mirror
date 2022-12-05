import { CreateUserHobbyInput } from './create-user-hobby.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserHobbyInput extends PartialType(CreateUserHobbyInput) {
  @Field(() => Int)
  id: number;
}
