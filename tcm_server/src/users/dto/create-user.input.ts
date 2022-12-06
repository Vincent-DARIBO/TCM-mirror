import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'user first name' })
  firstname: string;

  @Field(() => String, { description: 'user name' })
  lastName: string;

  @Field(() => String, { description: 'user email' })
  email: string;

  @Field(() => String, { description: 'user password' })
  password: string;

  @Field(() => String, { description: 'user birth date' })
  birthDate: Date;
}
