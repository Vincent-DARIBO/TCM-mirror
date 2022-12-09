import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsResolver } from './events.resolver';
import { Event } from './entities/event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsController } from './events.controller';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { ProfilesService } from 'src/profiles/profile.service';
import { Profile } from 'src/profiles/entities/profile.entity';
import { FilesService } from 'src/files/files.service';
import { File } from 'src/files/entities/file.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Event]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Profile]),
    TypeOrmModule.forFeature([File]),
  ],
  providers: [
    EventsResolver,
    EventsService,
    UsersService,
    ProfilesService,
    FilesService,
  ],
  controllers: [EventsController],
})
export class EventsModule {}
