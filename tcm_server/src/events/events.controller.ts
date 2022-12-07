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
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  // accessible only to the admin user
  @Get()
  async getEvents() {
    return await this.eventsService.findAll();
  }

  // accessible only to the connected user which uuid equals uuid parameter
  @Get(':uuid')
  async getEventsByLocation(@Param('uuid') uuid: string) {
    return await this.eventsService.findByLocation(uuid);
  }

  // accessible only to connected users
  @Get(':id')
  async getEvent(@Param('id') id: number) {
    return await this.eventsService.findOne(id);
  }

  // accessible only to connected users
  @Post()
  @UsePipes(ValidationPipe)
  async createEvent(@Body() createEventInput: CreateEventInput) {
    return this.eventsService.create(createEventInput);
  }

  // accessible only by creator and admin (may need to give access to other connected users to  update users list)
  @Put(':id')
  @UsePipes(ValidationPipe)
  async updateEvent(
    @Param('id') id: number,
    @Body() updateEventInput: UpdateEventInput,
  ) {
    return await this.eventsService.update(id, updateEventInput);
  }

  // accessible only by creator and admin
  @Delete(':id')
  async removeEvent(@Param('id') id: number) {
    return await this.eventsService.remove(id);
  }
}
