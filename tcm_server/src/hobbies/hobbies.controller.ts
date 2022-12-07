import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateHobbyInput } from './dto/create-hobby.input';
import { UpdateHobbyInput } from './dto/update-hobby.input';
import { HobbiesService } from './hobbies.service';

@Controller('hobbies')
export class HobbiesController {
  constructor(private readonly hobbiesService: HobbiesService) {}

  @Get()
  async getHobbies() {
    return await this.hobbiesService.findAll();
  }

  // acccessible only to the admin user
  @Get(':id')
  async getHobby(@Param('id') id: number) {
    return await this.hobbiesService.findOne(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createHobby(@Body() createHobbyInput: CreateHobbyInput) {
    return await this.hobbiesService.create(createHobbyInput);
  }

  // accessible only to the admin user
  @Put(':id')
  @UsePipes(ValidationPipe)
  async updateHobby(
    @Param('id') id: number,
    @Body() updateHobbyInput: UpdateHobbyInput,
  ) {
    return await this.hobbiesService.update(id, updateHobbyInput);
  }

  // accessible only to the admin user
  @Delete(':id')
  async removeHobby(@Param('id') id: number) {
    return await this.hobbiesService.remove(id);
  }
}
