import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Event } from 'src/events/entities/event.entity';
import { Hobby } from 'src/hobbies/entities/hobby.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'uuid' })
  uuid: string;

  @OneToOne(() => Profile, { onDelete: 'CASCADE' })
  @JoinColumn({ referencedColumnName: 'id' })
  @Field(() => Int)
  profile: Profile;

  @OneToMany(() => Event, (event) => event.creator, { onDelete: 'CASCADE' })
  events: Event[];

  @ManyToMany(() => User, { onDelete: 'CASCADE' })
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

  @ManyToMany(() => User, { onDelete: 'CASCADE' })
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

  @ManyToMany(() => User, { onDelete: 'CASCADE' })
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

  @ManyToMany(() => User, { onDelete: 'CASCADE' })
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

  @ManyToMany(() => Hobby, { onDelete: 'CASCADE' })
  @JoinTable({
    name: 'userHobbies',
    joinColumn: {
      name: 'user',
      referencedColumnName: 'uuid',
    },
    inverseJoinColumn: {
      name: 'hobbie',
      referencedColumnName: 'id',
    },
  })
  hobbies: Hobby[];
}
