import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserHobbyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
