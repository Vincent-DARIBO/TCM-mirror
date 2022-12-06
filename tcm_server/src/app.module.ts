import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [UsersModule, EventsModule, HobbiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
