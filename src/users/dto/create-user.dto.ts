import {
  IsNotEmpty,
  MinLength,
  IsDate,
  IsEmail,
  IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsDateString()
  @IsNotEmpty()
  birthday: Date;

  @ApiProperty({ required: false })
  firstname?: string;
  @ApiProperty({ required: false })
  lastname?: string;
}
