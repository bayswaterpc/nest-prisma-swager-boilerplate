import { IsNotEmpty, IsEmail } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  username: string;
}
