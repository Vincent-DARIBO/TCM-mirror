import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Public } from 'src/auth/auth.utils';
import { Hobby } from 'src/hobbies/entities/hobby.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // only accessible to the admin user
  @Public()
  @Get()
  async getUsers() {
    return await this.usersService.findAll();
  }

  // only accessible to the admin user
  @Get(':uuid')
  async getUser(@Param('uuid') uuid: string) {
    return await this.usersService.findOne(uuid);
  }

  // only accessible to the user whom id is the same as the route and admin user
  @Get(':uuid/profile')
  async getProfile(@Param('uuid') uuid: string) {
    return await this.usersService.getProfile(uuid);
  }

  // only accessible to the user whom id is the same as the route and admin user
  @Get(':uuid/friends')
  async getFriends(@Param('uuid') uuid: string) {
    return await this.usersService.getFriends(uuid);
  }

  // only accessible to the user whom id is the same as the route and admin user
  @Get(':uuid/blocked')
  async getBlocked(@Param('uuid') uuid: string) {
    return await this.usersService.getBlocked(uuid);
  }

  // only accessible to the user whom id is the same as the route and admin user
  @Get(':uuid/events')
  async getEvents(@Param('uuid') uuid: string) {
    return await this.usersService.getEvents(uuid);
  }
  @UsePipes(ValidationPipe)
  async createUser(@Body() createUserInput: CreateUserInput) {
    return await this.usersService.create(createUserInput);
  }

  // only accessible to the user whom id is the same as the route and admin user
  @Post(':uuid/avatar')
  @UseInterceptors(FileInterceptor('file'))
  async addAvatar(
    @Param('uuid') uuid: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          new FileTypeValidator({ fileType: 'jpeg' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return await this.usersService.addAvatar(
      uuid,
      file.buffer,
      file.originalname,
    );
  }

  @Post(':uuid/hobbies')
  async addHobbies(
    @Param('uuid') uuid: string,
    @Body() hobbies: Array<Hobby>,
  ) {
    return await this.usersService.addHobbies(uuid, hobbies);
  }

  // only accessible to the user whom id is the same as the route and admin user
  @Put(':uuid')
  @UsePipes(ValidationPipe)
  async updateUser(
    @Param('uuid') uuid: string,
    @Body() updateUserInput: UpdateUserInput,
  ) {
    return await this.usersService.update(uuid, updateUserInput);
  }

  @Delete(':uuid/hobbies/:id')
  async removeHobby(
    @Param('uuid') uuid: string,
    @Param('id') id: number,
  ) {
    return await this.usersService.removeHobby(uuid, id);
  }

  // only accessible to the user whom id is the same as the route and admin user
  @Delete(':uuid')
  async removeUser(@Param('uuid') uuid: string) {
    return await this.usersService.remove(uuid);
  }
}
