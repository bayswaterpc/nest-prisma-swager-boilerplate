import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  title: string;
  @ApiProperty({ required: false })
  description?: string;
  body: string;
  @ApiProperty({ required: false, default: false })
  published?: boolean = false;
}
