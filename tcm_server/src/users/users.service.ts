import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfilesService } from 'src/profiles/profile.service';
import { Repository } from 'typeorm';
import { hashPassword } from './users.utils';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Hobby } from 'src/hobbies/entities/hobby.entity';

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
      gender: profile.profile.gender,
      phone: profile.profile.phone,
      password: await hashPassword(profile.profile.password),
      birthDate: new Date(profile.profile.birthDate),
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
        profile: {
          picture: true,
        },
        createdEvents: true,
        subscribedEvents: true,
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
        profile: {
          picture: true,
        },
        createdEvents: {
          participants: {
            profile: {
              picture: true,
            },
          },
          creator: {
            profile: {
              picture: true,
            },
          },
        },
        subscribedEvents: {
          participants: {
            profile: {
              picture: true,
            },
          },
          creator: {
            profile: {
              picture: true,
            },
          },
        },
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

  async findByMail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      relations: {
        profile: true,
      },
      where: {
        profile: {
          email,
        },
      },
    });
    if (!user) {
      return null;
    }
    return user;
  }
  async getProfile(uuid: string) {
    const user = await this.findOne(uuid);
    const userProfile = {
      uuid: user.uuid,
      profileId: user.profile.id,
      firstName: user.profile.firstName,
      lastName: user.profile.lastName,
      email: user.profile.email,
      gender: user.profile.gender,
      phone: user.profile.phone,
      birthDate: user.profile.birthDate,
      location: user.profile.location,
      hobbies: user.hobbies,
      avatar: !user.profile.picture
        ? null
        : {
            id: user.profile.picture.id,
            name: user.profile.picture.name,
            data: Buffer.from(user.profile.picture.data, 'base64'),
          },
    };
    return userProfile;
  }

  async getFriends(uuid: string) {
    const user = await this.findOne(uuid);
    const userFriends = {
      friends: user.friends.map((friend) => {
        return {
          uuid: friend.uuid,
          firstName: friend.profile.firstName,
          lastName: friend.profile.lastName,
          gender: friend.profile.gender,
          hobbies: friend.hobbies,
          avatar: !friend.profile.picture
            ? null
            : {
                id: friend.profile.picture.id,
                name: friend.profile.picture.name,
                data: Buffer.from(friend.profile.picture.data, 'base64'),
              },
        };
      }),
      pendingFriends: user.pendingFriends.map((friend) => {
        return {
          uuid: friend.uuid,
          firstName: friend.profile.firstName,
          lastName: friend.profile.lastName,
          gender: friend.profile.gender,
          hobbies: friend.hobbies,
          avatar: !friend.profile.picture
            ? null
            : {
                id: friend.profile.picture.id,
                name: friend.profile.picture.name,
                data: Buffer.from(friend.profile.picture.data, 'base64'),
              },
        };
      }),
      metUsers: user.metUsers.map((met) => {
        return {
          uuid: met.uuid,
          firstName: met.profile.firstName,
          lastName: met.profile.lastName,
          gender: met.profile.gender,
          hobbies: met.hobbies,
          avatar: !met.profile.picture
            ? null
            : {
                id: met.profile.picture.id,
                name: met.profile.picture.name,
                data: Buffer.from(met.profile.picture.data, 'base64'),
              },
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
        firstName: blocked.profile.firstName,
        lastName: blocked.profile.lastName,
        gender: blocked.profile.gender,
        avatar: !blocked.profile.picture
          ? null
          : {
              id: blocked.profile.picture.id,
              name: blocked.profile.picture.name,
              data: Buffer.from(blocked.profile.picture.data, 'base64'),
            },
      };
    });
    return blocked;
  }

  async getEvents(uuid: string) {
    const user = await this.findOne(uuid);
    const events = {
      subscribed: user.subscribedEvents.map((event) => {
        return {
          id: event.id,
          name: event.name,
          description: event.description,
          location: event.location,
          maxParticipants: event.maxParticipants,
          creationDate: event.creationDate,
          eventDate: event.eventDate,
          type: event.type,
          creator: {
            uuid: event.creator.uuid,
            firstName: event.creator.profile.firstName,
            lastName: event.creator.profile.lastName,
            gender: event.creator.profile.gender,
            hobbies: event.creator.hobbies,
            avatar: !event.creator.profile.picture
              ? null
              : {
                  id: event.creator.profile.picture.id,
                  name: event.creator.profile.picture.name,
                  data: Buffer.from(
                    event.creator.profile.picture.data,
                    'base64',
                  ),
                },
          },
          participants: event.participants.length,
        };
      }),
      created: user.createdEvents.map((event) => {
        return {
          id: event.id,
          name: event.name,
          description: event.description,
          location: event.location,
          maxParticipants: event.maxParticipants,
          creationDate: event.creationDate,
          eventDate: event.eventDate,
          type: event.type,
          participants: event.participants.map((user) => {
            return {
              uuid: user.uuid,
              firstName: user.profile.firstName,
              lastName: user.profile.lastName,
              gender: user.profile.gender,
              hobbies: user.hobbies,
              avatar: !user.profile.picture
                ? null
                : {
                    id: user.profile.picture.id,
                    name: user.profile.picture.name,
                    data: Buffer.from(user.profile.picture.data, 'base64'),
                  },
            };
          }),
        };
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

  async addHobbies(uuid: string, hobbies: Array<Hobby>) {
    const user = await this.findOne(uuid);
    console.log(hobbies);
    hobbies.map((hobby) => {
      if (user.hobbies.filter((item) => hobby === item).length === 0)
        user.hobbies.push(hobby);
    });
    return await this.userRepository.save(user);
  }

  async update(
    uuid: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User | Profile> {
    if (updateUserInput.profile.password) {
      updateUserInput.profile.password = await hashPassword(
        updateUserInput.profile.password,
      );
    }
    if (updateUserInput.profile) {
      return await this.profilesService.update(
        (
          await this.findOne(uuid)
        ).profile.id,
        updateUserInput.profile,
      );
    } else {
      const user = this.userRepository.preload({
        uuid: uuid,
        ...updateUserInput,
      });
      if (!user) throw new NotFoundException(`User #${uuid} not found`);
      return await this.userRepository.save(await user);
    }
  }

  async removeHobby(uuid: string, id: number) {
    const user = await this.findOne(uuid);
    if (user.hobbies.find((hobby) => hobby.id === id))
      throw new NotFoundException(
        `Hobby ${id} not registered for user ${uuid}.`,
      );
    user.hobbies = user.hobbies.filter((hobby) => hobby.id !== id);
    return await this.userRepository.save(user);
  }

  async remove(uuid: string): Promise<User> {
    const user = await this.findOne(uuid);

    await this.profilesService.remove(user.profile.id);
    await this.userRepository.remove(user);
    return {
      uuid: uuid,
      profile: null,
      createdEvents: null,
      subscribedEvents: null,
      friends: null,
      pendingFriends: null,
      metUsers: null,
      blockedUsers: null,
      hobbies: null,
    };
  }
}
