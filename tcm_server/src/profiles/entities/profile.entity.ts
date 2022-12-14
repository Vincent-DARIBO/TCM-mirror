import { ObjectType, Field, Int } from '@nestjs/graphql';
import { File } from 'src/files/entities/file.entity';
import { Gender } from 'src/types';
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

  @OneToOne(() => File, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @Field(() => File)
  @JoinColumn({ referencedColumnName: 'id' })
  picture: File;

  @Column()
  @Field(() => String, { description: 'user first name' })
  firstName: string;

  @Column()
  @Field(() => String, { description: 'user last name' })
  lastName: string;

  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.MALE,
  })
  @Field(() => Gender)
  gender: Gender;

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
