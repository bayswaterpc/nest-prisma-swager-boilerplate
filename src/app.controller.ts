import { Controller, Request, Get, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiTags('authorization')
  async login(@Request() req) {
    return req.user;
  }
}
