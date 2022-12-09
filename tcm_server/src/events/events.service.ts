import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Not, Repository } from 'typeorm';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { Event } from './entities/event.entity';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    private readonly usersService: UsersService,
  ) {}

  async create(createEventInput: CreateEventInput): Promise<Event> {
    createEventInput.creationDate = new Date(createEventInput.creationDate);
    createEventInput.eventDate = new Date(createEventInput.eventDate);
    const event = this.eventRepository.create(createEventInput);
    event.participants = [];
    return await this.eventRepository.save(event);
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
        creator: {
          profile: {
            picture: true,
          },
        },
        participants: {
          profile: {
            picture: true,
          },
        },
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

  async addParticipant(id: number, uuid: string) {
    const event = await this.findOne(id);
    if (
      event.participants.find((user) => user.uuid === uuid) ||
      event.creator.uuid === uuid
    )
      throw new NotAcceptableException(`User ${uuid} already registered.`);
    if (event.participants.length + 1 >= event.maxParticipants)
      throw new NotAcceptableException(
        `Cannot register for this event: too many participants`,
      );
    const user = await this.usersService.findOne(uuid);
    event.participants.push(user);
    return await this.eventRepository.save(event);
  }

  async update(id: number, updateEventInput: UpdateEventInput): Promise<Event> {
    const event = await this.eventRepository.preload({
      id: id,
      ...updateEventInput,
    });
    if (!event) {
      throw new NotFoundException(`Event #${id} not found`);
    }
    return await this.eventRepository.save(event);
  }

  async removeParticipant(id: number, uuid: string) {
    const event = await this.findOne(id);
    if (event.creator.uuid === uuid)
      throw new NotAcceptableException(
        `User ${uuid} is the creator of event ${id}.`,
      );
    if (!event.participants.find((user) => user.uuid === uuid))
      throw new NotFoundException(
        `User ${uuid} not registered in event ${id}.`,
      );
    event.participants = event.participants.filter(
      (user) => user.uuid !== uuid,
    );
    return await this.eventRepository.save(event);
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
