import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserHobbiesService } from './user-hobbies.service';
import { UserHobby } from './entities/user-hobby.entity';
import { CreateUserHobbyInput } from './dto/create-user-hobby.input';
import { UpdateUserHobbyInput } from './dto/update-user-hobby.input';

@Resolver(() => UserHobby)
export class UserHobbiesResolver {
  constructor(private readonly userHobbiesService: UserHobbiesService) {}

  @Mutation(() => UserHobby)
  createUserHobby(@Args('createUserHobbyInput') createUserHobbyInput: CreateUserHobbyInput) {
    return this.userHobbiesService.create(createUserHobbyInput);
  }

  @Query(() => [UserHobby], { name: 'userHobbies' })
  findAll() {
    return this.userHobbiesService.findAll();
  }

  @Query(() => UserHobby, { name: 'userHobby' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userHobbiesService.findOne(id);
  }

  @Mutation(() => UserHobby)
  updateUserHobby(@Args('updateUserHobbyInput') updateUserHobbyInput: UpdateUserHobbyInput) {
    return this.userHobbiesService.update(updateUserHobbyInput.id, updateUserHobbyInput);
  }

  @Mutation(() => UserHobby)
  removeUserHobby(@Args('id', { type: () => Int }) id: number) {
    return this.userHobbiesService.remove(id);
  }
}
