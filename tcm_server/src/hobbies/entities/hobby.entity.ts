import { ObjectType } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Hobby {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
