import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class CreateProfileInput {
  @Field(() => String, {
    description: 'user first name',
    nullable: true,
  })
  firstname: string;

  @Field(() => String, { description: 'user name' })
  lastName: string;

  @IsEmail()
  @Field(() => String, { description: 'user email' })
  email: string;

  @Field(() => String, { description: 'user password' })
  password: string;

  @Field(() => String, { description: 'user birth date' })
  birthDate: Date;
}
