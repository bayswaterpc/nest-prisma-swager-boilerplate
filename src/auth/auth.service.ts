import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(username);
    // Strip out password from user info
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  // Password validation handled by Auth Guard
  // Function generates jwt token and attaches username to it...
  async login(user: string) {
    const payload = { username: user };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
