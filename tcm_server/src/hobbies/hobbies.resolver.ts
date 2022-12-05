import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HobbiesService } from './hobbies.service';
import { Hobby } from './entities/hobby.entity';
import { CreateHobbyInput } from './dto/create-hobby.input';
import { UpdateHobbyInput } from './dto/update-hobby.input';

@Resolver(() => Hobby)
export class HobbiesResolver {
  constructor(private readonly hobbiesService: HobbiesService) {}

  @Mutation(() => Hobby)
  createHobby(@Args('createHobbyInput') createHobbyInput: CreateHobbyInput) {
    return this.hobbiesService.create(createHobbyInput);
  }

  @Query(() => [Hobby], { name: 'hobbies' })
  findAll() {
    return this.hobbiesService.findAll();
  }

  @Query(() => Hobby, { name: 'hobby' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.hobbiesService.findOne(id);
  }

  @Mutation(() => Hobby)
  updateHobby(@Args('updateHobbyInput') updateHobbyInput: UpdateHobbyInput) {
    return this.hobbiesService.update(updateHobbyInput.id, updateHobbyInput);
  }

  @Mutation(() => Hobby)
  removeHobby(@Args('id', { type: () => Int }) id: number) {
    return this.hobbiesService.remove(id);
  }
}
