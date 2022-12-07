import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Profile {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'profile id' })
  id: number;

  @Column()
  @Field(() => String, { description: 'user first name' })
  firstName: string;

  @Column()
  @Field(() => String, { description: 'user last name' })
  lastName: string;

  @Column({ unique: true })
  @Field(() => String, { description: 'user email' })
  email: string;

  @Column()
  @Field(() => String, { description: 'user password' })
  password: string;

  @Column()
  @Field(() => String, { description: 'user birth date' })
  birthDate: Date;
}
