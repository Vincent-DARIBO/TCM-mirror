import { Field, ObjectType } from '@nestjs/graphql';
import { Event } from 'src/events/entities/event.entity';
import { Hobby } from 'src/hobbies/entities/hobby.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'uuid' })
  uuid: string;

  @Column()
  @Field(() => String, { description: 'user first name' })
  firstName: string;

  @Column()
  @Field(() => String, { description: 'user last name' })
  lastName: string;

  @Column()
  @Field(() => String, { description: 'user email' })
  email: string;

  @Column()
  @Field(() => String, { description: 'user password' })
  password: string;

  @Column()
  @Field(() => String, { description: 'user birth date' })
  birthDate: Date;

  @OneToMany(() => Event, (event) => event.creator)
  events: Event[];

  @ManyToMany(() => User)
  @JoinTable({
    name: 'friends',
    joinColumn: {
      name: 'user1',
      referencedColumnName: 'uuid',
    },
    inverseJoinColumn: {
      name: 'user2',
      referencedColumnName: 'uuid',
    },
  })
  friends: User[];

  @ManyToMany(() => User)
  @JoinTable({
    name: 'pendingFriends',
    joinColumn: {
      name: 'user',
      referencedColumnName: 'uuid',
    },
    inverseJoinColumn: {
      name: 'userAsked',
      referencedColumnName: 'uuid',
    },
  })
  pendingFriends: User[];

  @ManyToMany(() => User)
  @JoinTable({
    name: 'met',
    joinColumn: {
      name: 'user1',
      referencedColumnName: 'uuid',
    },
    inverseJoinColumn: {
      name: 'user2',
      referencedColumnName: 'uuid',
    },
  })
  metUsers: User[];

  @ManyToMany(() => User)
  @JoinTable({
    name: 'blocked',
    joinColumn: {
      name: 'user',
      referencedColumnName: 'uuid',
    },
    inverseJoinColumn: {
      name: 'userBlocked',
      referencedColumnName: 'uuid',
    },
  })
  blockedUsers: User[];

  @ManyToMany(() => Hobby)
  @JoinTable({
    name: 'userHobbies',
    joinColumn: {
      name: 'user',
      referencedColumnName: 'uuid',
    },
    inverseJoinColumn: {
      name: 'hobbie',
      referencedColumnName: 'hobbyId',
    },
  })
  hobbies: Hobby[];
}
