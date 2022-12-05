import { Module } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { HobbiesResolver } from './hobbies.resolver';

@Module({
  providers: [HobbiesResolver, HobbiesService]
})
export class HobbiesModule {}
