import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfilesService } from 'src/profiles/profile.service';
import { Repository } from 'typeorm';
import { hashPassword } from './users.utils';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly profilesService: ProfilesService,
  ) {}

  async create(profile: CreateUserInput): Promise<User> {
    const createProfileInput = {
      firstName: profile.profile.firstName,
      lastName: profile.profile.lastName,
      email: profile.profile.email,
      phone: profile.profile.phone,
      password: await hashPassword(profile.profile.password),
      birthDate: profile.profile.birthDate,
      location: profile.profile.location,
    };
    const createUserInput = {
      profile: await this.profilesService.create(createProfileInput),
    };
    const user = this.userRepository.create(createUserInput);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<Array<User>> {
    return await this.userRepository.find({
      relations: {
        profile: true,
        events: true,
        friends: true,
        pendingFriends: true,
        metUsers: true,
        blockedUsers: true,
        hobbies: true,
      },
    });
  }

  async findOne(uuid: string): Promise<User> {
    const user = await this.userRepository.findOne({
      relations: {
        profile: true,
        events: true,
        friends: true,
        pendingFriends: true,
        metUsers: true,
        blockedUsers: true,
        hobbies: true,
      },
      where: { uuid: uuid },
    });
    if (!user) {
      throw new NotFoundException(`User #${uuid} not found`);
    }
    return user;
  }

  async getProfile(uuid: string) {
    const user = await this.findOne(uuid);
    const userProfile = {
      uuid: user.uuid,
      avatar: {
        id: user.profile.picture.id,
        name: user.profile.picture.name,
        data: Buffer.from(user.profile.picture.data, 'base64'),
      },
      firstName: user.profile.firstName,
      lastName: user.profile.lastName,
      email: user.profile.email,
      phone: user.profile.phone,
      birthDate: user.profile.birthDate,
      location: user.profile.location,
      hobbies: user.hobbies,
    };
    return userProfile;
  }

  async getFriends(uuid: string) {
    const user = await this.findOne(uuid);
    const userFriends = {
      friends: user.friends.map((friend) => {
        return {
          uuid: friend.uuid,
          avatar: {
            id: friend.profile.picture.id,
            name: friend.profile.picture.name,
            data: Buffer.from(friend.profile.picture.data, 'base64'),
          },
          firstName: friend.profile.firstName,
          lastName: friend.profile.lastName,
          hobbies: friend.hobbies,
        };
      }),
      pendingFriends: user.pendingFriends.map((friend) => {
        return {
          uuid: friend.uuid,
          avatar: {
            id: friend.profile.picture.id,
            name: friend.profile.picture.name,
            data: Buffer.from(friend.profile.picture.data, 'base64'),
          },
          firstName: friend.profile.firstName,
          lastName: friend.profile.lastName,
          hobbies: friend.hobbies,
        };
      }),
      metUsers: user.metUsers.map((met) => {
        return {
          uuid: met.uuid,
          avatar: {
            id: met.profile.picture.id,
            name: met.profile.picture.name,
            data: Buffer.from(met.profile.picture.data, 'base64'),
          },
          firstName: met.profile.firstName,
          lastName: met.profile.lastName,
          hobbies: met.hobbies,
        };
      }),
    };
    return userFriends;
  }

  async getBlocked(uuid: string) {
    const user = await this.findOne(uuid);
    const blocked = user.blockedUsers.map((blocked) => {
      return {
        uuid: blocked.uuid,
        avatar: {
          id: blocked.profile.picture.id,
          name: blocked.profile.picture.name,
          data: Buffer.from(blocked.profile.picture.data, 'base64'),
        },
        firstName: blocked.profile.firstName,
        lastName: blocked.profile.lastName,
      };
    });
    return blocked;
  }

  async getEvents(uuid: string) {
    const user = await this.findOne(uuid);
    const events = {
      subscribed: user.events.map((event) => {
        if (event.creator !== user) {
          return {
            id: event.id,
            name: event.name,
            description: event.description,
            location: event.location,
            maxParticipants: event.maxParticipants,
            creationDate: event.creationDate,
            eventDate: event.eventDate,
            type: event.type,
            creator: event.creator,
            participants: event.participants.map((user) => {
              return {
                uuid: user.uuid,
                avatar: {
                  id: user.profile.picture.id,
                  name: user.profile.picture.name,
                  data: Buffer.from(user.profile.picture.data, 'base64'),
                },
                firstName: user.profile.firstName,
                lastName: user.profile.lastName,
                hobbies: user.hobbies,
              };
            }),
          };
        }
      }),
      created: user.events.map((event) => {
        if (event.creator === user) {
          return {
            id: event.id,
            name: event.name,
            description: event.description,
            location: event.location,
            maxParticipants: event.maxParticipants,
            creationDate: event.creationDate,
            eventDate: event.eventDate,
            type: event.type,
            creator: event.creator,
            participants: event.participants.map((user) => {
              return {
                uuid: user.uuid,
                avatar: {
                  id: user.profile.picture.id,
                  name: user.profile.picture.name,
                  data: Buffer.from(user.profile.picture.data, 'base64'),
                },
                firstName: user.profile.firstName,
                lastName: user.profile.lastName,
                hobbies: user.hobbies,
              };
            }),
          };
        }
      }),
    };
    return events;
  }

  async addAvatar(uuid: string, imageBuffer: Buffer, filename: string) {
    const user = await this.findOne(uuid);
    return await this.profilesService.addAvatar(user.profile.id, {
      name: filename,
      data: imageBuffer.toString('base64'),
    });
  }

  async update(uuid: string, updateUserInput: UpdateUserInput): Promise<User> {
    if (updateUserInput.profile.password) {
      updateUserInput.profile.password = await hashPassword(
        updateUserInput.profile.password,
      );
    }
    const user = this.userRepository.preload({
      uuid: uuid,
      ...updateUserInput,
    });
    if (!user) {
      throw new NotFoundException(`User #${uuid} not found`);
    }
    return await this.userRepository.save(await user);
  }

  async remove(uuid: string): Promise<User> {
    const user = await this.findOne(uuid);
    await this.userRepository.remove(user);
    return {
      uuid: uuid,
      profile: null,
      events: null,
      friends: null,
      pendingFriends: null,
      metUsers: null,
      blockedUsers: null,
      hobbies: null,
    };
  }
}
