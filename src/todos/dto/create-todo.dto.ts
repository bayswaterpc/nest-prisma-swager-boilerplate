import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  description: string;

  @ApiProperty({ required: false, default: false })
  completed: boolean;
}
