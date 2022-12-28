import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Hobby } from 'src/hobbies/entities/hobby.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByMail(email);

    if (!user) throw new NotFoundException(`User ${email} not found`);
    if (await compare(pass, user.profile.password)) {
      const {
        profile: { password, ...rest },
        ...result
      } = user;
      return { ...result, ...rest };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.firstName, sub: user.uuid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async signUp(data: { profile: Profile; hobbies: Hobby[] }) {
    const { profile, hobbies } = data;
    console.log(JSON.stringify(data, null, 2));
    const user = await this.usersService.findByMail(profile.email);
    if (user) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: `User ${profile.email} already exists`,
      });
    }
    const newProfile = await this.usersService.create({
      profile,
    });
    const createdUser = await this.usersService.addHobbies(
      newProfile.uuid,
      hobbies,
    );
    console.log({ createdUser });
    return this.login(createdUser);
  }
}
