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
  async signUp(profile: Profile) {
    const user = await this.usersService.findByMail(profile.email);
    if (user) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: `User ${profile.email} already exists`,
      });
    }
    const createdUser = await this.usersService.create({
      profile,
    });
    console.log({ createdUser });
    return this.login(createdUser);
  }
}
