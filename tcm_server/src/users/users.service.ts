import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(createUserInput);
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<Array<User>> {
    return await this.userRepository.find({
      relations: {
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

  async update(uuid: string, updateUserInput: UpdateUserInput): Promise<User> {
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
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      birthDate: null,
      events: null,
      friends: null,
      pendingFriends: null,
      metUsers: null,
      blockedUsers: null,
      hobbies: null,
    };
  }
}
