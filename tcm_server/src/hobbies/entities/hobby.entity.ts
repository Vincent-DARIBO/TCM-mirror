import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Hobby {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'hobby id' })
  id: number;

  @Column()
  @Field(() => String, { description: 'hobby name' })
  name: string;
}
