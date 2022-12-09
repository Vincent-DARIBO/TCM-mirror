import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    if (createHobbyInput.name.length > 20) {
      throw new ForbiddenException(`Hobby length must be under 20`);
    }
    createHobbyInput.name = createHobbyInput.name.toLowerCase();
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
    if (updateHobbyInput.name.length > 20) {
      throw new ForbiddenException(`Hobby length must be under 20`);
    }
    updateHobbyInput.name = updateHobbyInput.name.toLowerCase();
    const hobby = await this.hobbyRepository.preload({
      id: id,
      ...updateHobbyInput,
    });
    if (!hobby)
      throw new NotFoundException(`Hobby #${id} not found`);
    return await this.hobbyRepository.save(hobby);
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
