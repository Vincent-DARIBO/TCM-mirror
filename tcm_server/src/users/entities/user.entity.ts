import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Friend } from 'src/friends/entities/friend.entity';
import { Hobby } from 'src/hobbies/entities/hobby.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
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
  @Field(() => Int, { description: 'user age' })
  age: number;

  @ManyToMany(() => User)
  @JoinTable({
    name: "friends",
    joinColumn: {
      name: "user1",
      referencedColumnName: "uuid",
    },
    inverseJoinColumn: {
      name: "user2",
      referencedColumnName: "uuid",
    }
  })
  friends: User[]

  @ManyToMany(() => User)
  @JoinTable({
    name: "friends",
    joinColumn: {
      name: "user",
      referencedColumnName: "uuid",
    },
    inverseJoinColumn: {
      name: "userAsked",
      referencedColumnName: "uuid",
    }
  })
  pendingFriends: User[]

  @ManyToMany(() => User)
  @JoinTable({
    name: "met",
    joinColumn: {
      name: "user1",
      referencedColumnName: "uuid",
    },
    inverseJoinColumn: {
      name: "user2",
      referencedColumnName: "uuid",
    }
  })
  metUsers: User[]

  @ManyToMany(() => User)
  @JoinTable({
    name: "blocked",
    joinColumn: {
      name: "user",
      referencedColumnName: "uuid",
    },
    inverseJoinColumn: {
      name: "userBlocked",
      referencedColumnName: "uuid",
    }
  })
  blockedUsers: User[]

  @ManyToMany(() => Hobby)
  @JoinTable({
    name: "userHobbies",
    joinColumn: {
      name: "user",
      referencedColumnName: "uuid",
    },
    inverseJoinColumn: {
      name: "hobbie",
      referencedColumnName: "hobbyId",
    }
  })
  hobbies: Hobby[]
}
