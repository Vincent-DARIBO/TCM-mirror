import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Message } from 'src/messages/entities/message.entity';

@ObjectType()
export class Channel {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  creationDate: Date;

  @Column()
  @Field(() => Boolean)
  isDisplayed: Boolean;

  @OneToMany(() => Message, (message) => message.channel)
  @Field(() => [Message])
  messages: Message[];
}
