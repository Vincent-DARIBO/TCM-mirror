import { Test, TestingModule } from '@nestjs/testing';
import { UserHobbiesService } from './user-hobbies.service';

describe('UserHobbiesService', () => {
  let service: UserHobbiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHobbiesService],
    }).compile();

    service = module.get<UserHobbiesService>(UserHobbiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
