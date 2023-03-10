import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateFileInput } from 'src/files/dto/create-file.input';
import { FilesService } from 'src/files/files.service';
import { Hobby } from 'src/hobbies/entities/hobby.entity';
import { Repository } from 'typeorm';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile)
    private readonly profileRepository: Repository<Profile>,
    private readonly filesService: FilesService,
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
      relations: {
        picture: true,
      },
      where: { id: id },
    });
    if (!profile) {
      throw new NotFoundException(`Profile #${id} not found`);
    }
    return profile;
  }

  async addAvatar(
    id: number,
    createFileInput: CreateFileInput,
  ): Promise<Profile> {
    const profile = await this.findOne(id);
    const profileUpdate = this.profileRepository.preload({
      id: id,
      ...{
        picture: profile.picture
          ? await this.filesService.update(profile.picture.id, {
              id: profile.picture.id,
              name: createFileInput.name,
              data: createFileInput.data,
            })
          : await this.filesService.create(createFileInput),
      },
    });
    return await this.profileRepository.save(await profileUpdate);
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

    if (profile.picture) await this.filesService.remove(profile.picture.id);
    await this.profileRepository.remove(profile);
    return {
      id: id,
      picture: null,
      firstName: null,
      lastName: null,
      email: null,
      gender: null,
      phone: null,
      password: null,
      birthDate: null,
      location: null,
    };
  }
}
