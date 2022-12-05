import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserHobby {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
