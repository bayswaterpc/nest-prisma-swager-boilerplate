import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { hashPassword } from 'src/common/crypto';
import { UserAuthInfo } from './entities/userAuthInfo';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    username: string,
    pass: string,
  ): Promise<UserAuthInfo | null> {
    const user = await this.usersService.findOneByEmail(username);
    if (user == null || user.salt == null || user.password == null) {
      return null;
    }
    const hashed_ps = await hashPassword(pass, user.salt);
    if (hashed_ps !== user.password) {
      return null;
    }
    const userAuthInfo: UserAuthInfo = { id: user.id };

    return userAuthInfo;
  }

  // Password validation handled by Auth Guard
  // Function generates jwt token and attaches username to it...
  async login(userId: string) {
    const payload = { userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
