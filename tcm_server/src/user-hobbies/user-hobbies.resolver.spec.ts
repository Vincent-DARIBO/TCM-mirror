import { Test, TestingModule } from '@nestjs/testing';
import { UserHobbiesResolver } from './user-hobbies.resolver';
import { UserHobbiesService } from './user-hobbies.service';

describe('UserHobbiesResolver', () => {
  let resolver: UserHobbiesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHobbiesResolver, UserHobbiesService],
    }).compile();

    resolver = module.get<UserHobbiesResolver>(UserHobbiesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
