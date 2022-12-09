import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(createEventInput: CreateEventInput): Promise<Event> {
    createEventInput.creationDate = new Date(createEventInput.creationDate);
    createEventInput.eventDate = new Date(createEventInput.eventDate);
    const event = this.eventRepository.create(createEventInput);
    const savedEvent = await this.eventRepository.save(event);
    savedEvent.participants.push(event.creator);
    return await this.eventRepository.save(savedEvent);
  }

  async findAll(): Promise<Array<Event>> {
    return await this.eventRepository.find({
      relations: {
        creator: true,
        participants: true,
      },
    });
  }

  async findOne(id: number): Promise<Event> {
    const event = await this.eventRepository.findOne({
      relations: {
        creator: true,
        participants: true,
      },
      where: { id: id },
    });
    if (!event) {
      throw new NotFoundException(`Event #${id} not found`);
    }
    return event;
  }

  async findByLocation(uuid: string) {
    // get user location and return an array of events depending on the distance with the users location
    return await this.findAll();
  }

  async update(id: number, updateEventInput: UpdateEventInput): Promise<Event> {
    const event = this.eventRepository.preload({
      id: id,
      ...updateEventInput,
    });
    if (!event) {
      throw new NotFoundException(`Event #${id} not found`);
    }
    return await this.eventRepository.save(await event);
  }

  async remove(id: number): Promise<Event> {
    const event = await this.findOne(id);
    await this.eventRepository.remove(event);
    return {
      id: id,
      name: null,
      description: null,
      location: null,
      maxParticipants: null,
      creationDate: null,
      eventDate: null,
      type: null,
      creator: null,
      participants: null,
    };
  }
}
