import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Event } from 'src/events/entities/event.entity';
import { Hobby } from 'src/hobbies/entities/hobby.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import {
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

  @OneToOne(() => Profile, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @Field(() => Profile)
  @JoinColumn({ referencedColumnName: 'id' })
  profile: Profile;

  @OneToMany(() => Event, (event) => event.creator, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @Field(() => [Event], { nullable: true })
  events: Event[];

  @ManyToMany(() => User, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @Field(() => [User])
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

  @ManyToMany(() => User, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @Field(() => [User])
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

  @ManyToMany(() => User, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @Field(() => [User])
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

  @ManyToMany(() => User, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @Field(() => [User])
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

  @ManyToMany(() => Hobby, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @Field(() => [Hobby])
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
