import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Meeting {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
