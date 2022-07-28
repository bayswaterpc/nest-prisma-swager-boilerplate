import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty()
  description: string;

  @ApiProperty({ required: false, default: false })
  completed: boolean;
}
