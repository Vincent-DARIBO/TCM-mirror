import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BlockedService } from './blocked.service';
import { Blocked } from './entities/blocked.entity';
import { CreateBlockedInput } from './dto/create-blocked.input';
import { UpdateBlockedInput } from './dto/update-blocked.input';

@Resolver(() => Blocked)
export class BlockedResolver {
  constructor(private readonly blockedService: BlockedService) {}

  @Mutation(() => Blocked)
  createBlocked(@Args('createBlockedInput') createBlockedInput: CreateBlockedInput) {
    return this.blockedService.create(createBlockedInput);
  }

  @Query(() => [Blocked], { name: 'blocked' })
  findAll() {
    return this.blockedService.findAll();
  }

  @Query(() => Blocked, { name: 'blocked' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.blockedService.findOne(id);
  }

  @Mutation(() => Blocked)
  updateBlocked(@Args('updateBlockedInput') updateBlockedInput: UpdateBlockedInput) {
    return this.blockedService.update(updateBlockedInput.id, updateBlockedInput);
  }

  @Mutation(() => Blocked)
  removeBlocked(@Args('id', { type: () => Int }) id: number) {
    return this.blockedService.remove(id);
  }
}
