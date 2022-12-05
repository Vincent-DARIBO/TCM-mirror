import { Module } from '@nestjs/common';
import { UserHobbiesService } from './user-hobbies.service';
import { UserHobbiesResolver } from './user-hobbies.resolver';

@Module({
  providers: [UserHobbiesResolver, UserHobbiesService]
})
export class UserHobbiesModule {}
