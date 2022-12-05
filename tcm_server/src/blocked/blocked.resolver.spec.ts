import { Test, TestingModule } from '@nestjs/testing';
import { BlockedResolver } from './blocked.resolver';
import { BlockedService } from './blocked.service';

describe('BlockedResolver', () => {
  let resolver: BlockedResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockedResolver, BlockedService],
    }).compile();

    resolver = module.get<BlockedResolver>(BlockedResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
