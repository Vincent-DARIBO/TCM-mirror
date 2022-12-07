import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFileInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  data: string;
}
