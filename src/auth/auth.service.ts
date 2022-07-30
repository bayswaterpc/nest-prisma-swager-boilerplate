import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { hashPassword } from 'src/common/crypto';
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(username);
    if (user == null || user.salt == null || user.password == null) {
      throw new HttpException(
        {
          status: HttpStatus.EXPECTATION_FAILED,
          error: "required user info couldn't be retried",
        },
        HttpStatus.EXPECTATION_FAILED,
      );
    }
    const hashed_ps = hashPassword(pass, user.salt);
    // Strip out password from user info
    if (user && hashed_ps === user.password) {
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
