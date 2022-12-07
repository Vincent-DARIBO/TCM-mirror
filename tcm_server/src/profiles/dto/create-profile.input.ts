import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsPhoneNumber } from 'class-validator';

@InputType()
export class CreateProfileInput {
  @Field(() => String, { description: 'user first name' })
  firstName: string;

  @Field(() => String, { description: 'user name' })
  lastName: string;

  @IsEmail()
  @Field(() => String, { description: 'user email' })
  email: string;

  @IsPhoneNumber('FR')
  @Field(() => String, { description: 'user phone number' })
  phone: string;

  @Field(() => String, { description: 'user password' })
  password: string;

  @Field(() => String, { description: 'user birth date' })
  birthDate: Date;

  @Field(() => String, { description: 'user location' })
  location: string;
}
