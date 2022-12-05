import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserHobbiesModule } from './user-hobbies/user-hobbies.module';
import { MeetingsModule } from './meetings/meetings.module';
import { FriendsModule } from './friends/friends.module';
import { BlockedModule } from './blocked/blocked.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { EventsModule } from './events/events.module';
import { EventsModule } from './events/events.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { BlockedModule } from './blocked/blocked.module';
import { FriendsModule } from './friends/friends.module';
import { MeetingsModule } from './meetings/meetings.module';
import { UserHobbiesModule } from './user-hobbies/user-hobbies.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, EventsModule, HobbiesModule, BlockedModule, FriendsModule, MeetingsModule, UserHobbiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
