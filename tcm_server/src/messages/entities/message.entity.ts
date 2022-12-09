import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Channel } from 'src/channels/entities/channel.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
export class Message {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  sendDate: Date;

  @Column()
  @Field(() => Boolean)
  isDisplayed: Boolean;

  @ManyToOne(() => Channel, (channel) => channel.messages)
  @Field(() => Channel)
  channel: Channel;
}
