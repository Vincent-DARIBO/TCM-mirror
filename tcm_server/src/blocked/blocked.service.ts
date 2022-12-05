import { Injectable } from '@nestjs/common';
import { CreateBlockedInput } from './dto/create-blocked.input';
import { UpdateBlockedInput } from './dto/update-blocked.input';

@Injectable()
export class BlockedService {
  create(createBlockedInput: CreateBlockedInput) {
    return 'This action adds a new blocked';
  }

  findAll() {
    return `This action returns all blocked`;
  }

  findOne(id: number) {
    return `This action returns a #${id} blocked`;
  }

  update(id: number, updateBlockedInput: UpdateBlockedInput) {
    return `This action updates a #${id} blocked`;
  }

  remove(id: number) {
    return `This action removes a #${id} blocked`;
  }
}
