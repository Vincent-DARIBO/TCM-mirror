import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
  ) {}

  async create(createProfileInput: CreateProfileInput): Promise<Profile> {
    const profile = this.profileRepository.create(createProfileInput);
    return await this.profileRepository.save(profile);
  }

  async findAll(): Promise<Array<Profile>> {
    return await this.profileRepository.find();
  }

  async findOne(id: number): Promise<Profile> {
    const profile = await this.profileRepository.findOne({
      where: { id: id },
    });
    if (!profile) {
      throw new NotFoundException(`Profile #${id} not found`);
    }
    return profile;
  }

  async update(
    id: number,
    updateProfileInput: UpdateProfileInput,
  ): Promise<Profile> {
    const profile = this.profileRepository.preload({
      id: id,
      ...updateProfileInput,
    });
    if (!profile) {
      throw new NotFoundException(`Profile #${id} not found`);
    }
    return await this.profileRepository.save(await profile);
  }

  async remove(id: number): Promise<Profile> {
    const profile = await this.findOne(id);
    await this.profileRepository.remove(profile);
    return {
      id: id,
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      birthDate: null,
    };
  }
}
