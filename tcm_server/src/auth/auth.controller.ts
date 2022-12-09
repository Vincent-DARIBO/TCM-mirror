import { Controller, Request, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './auth.utils';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Public()
  @Post('/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
