import { Module } from '@nestjs/common';
import { ProfilesService } from './profile.service';
import { ProfileResolver } from './profile.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { File } from 'src/files/entities/file.entity';
import { FilesService } from 'src/files/files.service';

@Module({
  imports: [TypeOrmModule.forFeature([Profile]), TypeOrmModule.forFeature([File])],
  providers: [ProfileResolver, ProfilesService, FilesService],
})
export class ProfileModule {}
