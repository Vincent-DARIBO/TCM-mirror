import { Module } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { HobbiesResolver } from './hobbies.resolver';
import { Hobby } from './entities/hobby.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Hobby])],
  providers: [HobbiesResolver, HobbiesService],
})
export class HobbiesModule {}
