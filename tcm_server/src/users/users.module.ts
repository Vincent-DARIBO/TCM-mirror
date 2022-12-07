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

@Module({
  imports: [TypeOrmModule.forFeature([User]), TypeOrmModule.forFeature([Profile]), TypeOrmModule.forFeature([File])],
  providers: [UsersResolver, UsersService, ProfilesService, FilesService],
  controllers: [UsersController],
})
export class UsersModule {}
