import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHobbyInput } from './dto/create-hobby.input';
import { UpdateHobbyInput } from './dto/update-hobby.input';
import { Hobby } from './entities/hobby.entity';

@Injectable()
export class HobbiesService {
  constructor(
    @InjectRepository(Hobby)
    private readonly hobbyRepository: Repository<Hobby>,
  ) {}

  async create(createHobbyInput: CreateHobbyInput): Promise<Hobby> {
    const hobby = this.hobbyRepository.create(createHobbyInput);
    return await this.hobbyRepository.save(hobby);
  }

  async findAll(): Promise<Array<Hobby>> {
    return await this.hobbyRepository.find();
  }

  async findOne(id: number): Promise<Hobby> {
    const hobby = await this.hobbyRepository.findOne({
      where: { id: id },
    });
    if (!hobby) {
      throw new NotFoundException(`Hobby #${id} not found`);
    }
    return hobby;
  }

  async update(id: number, updateHobbyInput: UpdateHobbyInput): Promise<Hobby> {
    const hobby = this.hobbyRepository.preload({
      id: id,
      ...updateHobbyInput,
    });
    if (!hobby) {
      throw new NotFoundException(`Hobby #${id} not found`);
    }
    return await this.hobbyRepository.save(await hobby);
  }

  async remove(id: number): Promise<Hobby> {
    const hobby = await this.findOne(id);
    await this.hobbyRepository.remove(hobby);
    return {
      id: id,
      name: null,
    };
  }
}
