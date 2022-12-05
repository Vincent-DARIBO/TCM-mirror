import { Injectable } from '@nestjs/common';
import { CreateHobbyInput } from './dto/create-hobby.input';
import { UpdateHobbyInput } from './dto/update-hobby.input';

@Injectable()
export class HobbiesService {
  create(createHobbyInput: CreateHobbyInput) {
    return 'This action adds a new hobby';
  }

  findAll() {
    return `This action returns all hobbies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hobby`;
  }

  update(id: number, updateHobbyInput: UpdateHobbyInput) {
    return `This action updates a #${id} hobby`;
  }

  remove(id: number) {
    return `This action removes a #${id} hobby`;
  }
}
