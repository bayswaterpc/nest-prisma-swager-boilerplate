import { Article } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ArticleEntity implements Article {
  id: number;
  title: string;
  @ApiProperty({ required: false, nullable: true })
  description: string | null;
  body: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
