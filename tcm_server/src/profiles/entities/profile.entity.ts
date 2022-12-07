import { ObjectType, Field, Int } from '@nestjs/graphql';
import { File } from 'src/files/entities/file.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Profile {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'profile id' })
  id: number;

  @OneToOne(() => File, { onDelete: 'CASCADE' })
  @JoinColumn({ referencedColumnName: 'id' })
  @Field(() => Int)
  picture: File;

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
  @Field(() => String, { description: 'user phone number' })
  phone: string;

  @Column()
  @Field(() => String, { description: 'user password' })
  password: string;

  @Column()
  @Field(() => String, { description: 'user birth date' })
  birthDate: Date;

  @Column()
  @Field(() => String, { description: 'user location' })
  location: string;
}
