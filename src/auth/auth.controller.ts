import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard, LocalAuthGuard } from './guards';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiTags('authorization')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiTags('authorization')
  getProfile(@Request() req) {
    return req.user;
  }
}
