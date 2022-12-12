import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { ProfilesService } from 'src/profiles/profile.service';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Event } from 'src/events/entities/event.entity';
import { EventsService } from 'src/events/events.service';
import { File } from 'src/files/entities/file.entity';
import { FilesService } from 'src/files/files.service';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth-guard';
import { APP_GUARD } from '@nestjs/core';

dotenv.config();

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Profile]),
    TypeOrmModule.forFeature([Event]),
    TypeOrmModule.forFeature([File]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      // signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    UsersService,
    ProfilesService,
    EventsService,
    FilesService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
