import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { ProfilesService } from 'src/profiles/profile.service';
import { Profile } from 'src/profiles/entities/profile.entity';
import { FilesService } from 'src/files/files.service';
import { File } from 'src/files/entities/file.entity';
import { Event } from 'src/events/entities/event.entity';
import { EventsService } from 'src/events/events.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Profile]),
    TypeOrmModule.forFeature([File]),
    TypeOrmModule.forFeature([Event]),
  ],
  providers: [UsersResolver, UsersService, ProfilesService, FilesService, EventsService],
  controllers: [UsersController],
})
export class UsersModule {}
