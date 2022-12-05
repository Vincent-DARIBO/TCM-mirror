import { Injectable } from '@nestjs/common';
import { CreateUserHobbyInput } from './dto/create-user-hobby.input';
import { UpdateUserHobbyInput } from './dto/update-user-hobby.input';

@Injectable()
export class UserHobbiesService {
  create(createUserHobbyInput: CreateUserHobbyInput) {
    return 'This action adds a new userHobby';
  }

  findAll() {
    return `This action returns all userHobbies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userHobby`;
  }

  update(id: number, updateUserHobbyInput: UpdateUserHobbyInput) {
    return `This action updates a #${id} userHobby`;
  }

  remove(id: number) {
    return `This action removes a #${id} userHobby`;
  }
}
