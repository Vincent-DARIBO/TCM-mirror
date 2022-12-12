import { Field, InputType, Int } from '@nestjs/graphql';
import { Profile } from 'src/profiles/entities/profile.entity';

@InputType()
export class CreateUserInput {
  @Field(() => Int)
  profile: Profile;
}
