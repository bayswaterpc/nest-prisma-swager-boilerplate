import { IsNotEmpty, MinLength, IsDate, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsDate()
  @IsNotEmpty()
  birthday: Date;

  @ApiProperty({ required: false })
  firstname?: string;
  @ApiProperty({ required: false })
  lastname?: string;
}
