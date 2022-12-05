import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Hobby {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
