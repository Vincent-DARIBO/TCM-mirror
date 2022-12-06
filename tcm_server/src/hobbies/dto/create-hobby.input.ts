import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateHobbyInput {
  @Field(() => String, { description: 'hobby' })
  name: string;
}
