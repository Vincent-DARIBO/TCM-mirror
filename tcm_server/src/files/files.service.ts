import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileInput } from './dto/create-file.input';
import { UpdateFileInput } from './dto/update-file.input';
import { File } from './entities/file.entity';

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
  ) {}

  async create(createFileInput: CreateFileInput): Promise<File> {
    const file = this.fileRepository.create(createFileInput);
    return await this.fileRepository.save(file);
  }

  async findAll(): Promise<Array<File>> {
    return await this.fileRepository.find();
  }

  async findOne(id: number): Promise<File> {
    const file = await this.fileRepository.findOne({
      where: { id: id },
    });
    if (!file) {
      throw new NotFoundException(`File #${id} not found`);
    }
    return file;
  }

  async update(id: number, updateFileInput: UpdateFileInput): Promise<File> {
    const file = this.fileRepository.preload({
      id: id,
      ...updateFileInput,
    });
    if (!file) {
      throw new NotFoundException(`File #${id} not found`);
    }
    return await this.fileRepository.save(await file);
  }

  async remove(id: number): Promise<File> {
    const file = await this.findOne(id);
    await this.fileRepository.remove(file);
    return {
      id: id,
      name: null,
      data: null,
    };
  }
}
