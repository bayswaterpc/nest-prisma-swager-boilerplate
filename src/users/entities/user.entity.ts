import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  email: string;
  password: string;
  salt: string;
  birthday: Date;
  id: string;
  @ApiProperty({ required: false, nullable: true })
  firstname: string;
  @ApiProperty({ required: false, nullable: true })
  lastname: string;
  createdAt: Date;
  updatedAt: Date;
}
