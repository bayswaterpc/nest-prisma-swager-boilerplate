import { IsNotEmpty, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @IsDate()
  @IsNotEmpty()
  birthday: Date;

  @ApiProperty({ required: false })
  firstname?: string;
  @ApiProperty({ required: false })
  lastname?: string;
}
