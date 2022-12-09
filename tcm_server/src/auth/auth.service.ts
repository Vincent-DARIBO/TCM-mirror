import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByMail(email);
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
}
