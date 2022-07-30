import {
  Controller,
  Request,
  Get,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard, LocalAuthGuard } from './guards';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { UserAuthInfo } from './entities/userAuthInfo';

@ApiTags('authorization')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(@Request() req, @Body() _login: LoginDto) {
    const info: UserAuthInfo = req.user;
    return this.authService.login(info.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
