import { Todo } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TodoEntity implements Todo {
  @ApiProperty()
  id: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
