import { Injectable } from '@nestjs/common';
import { UserSentTinyUrlDto } from './dto/create-tiny-url.dto';
import { UpdateTinyUrlDto } from './dto/update-tiny-url.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { customAlphabet } from 'nanoid';

@Injectable()
export class TinyUrlService {
  constructor(private prisma: PrismaService) {}
  create(createTinyUrlDto: UserSentTinyUrlDto) {
    const slug_friendl_alphabet = '1234567890abcdef';
    const nanoid = customAlphabet(slug_friendl_alphabet, 10);
    const unique_slug = nanoid();

    // const minifiedUrl = unique_slug;

    const minifiedUrl = unique_slug;
    const attachedUserId = '';
    const targetUrl = createTinyUrlDto.targetUrl;
    return this.prisma.shortenedUrlLink.create({
      data: { minifiedUrl, attachedUserId, targetUrl },
    });
  }

  findAll() {
    return `This action returns all tinyUrl`;
  }

  findOne(id: string) {
    return this.prisma.shortenedUrlLink.findUnique({
      where: { minifiedUrl: id },
    });
  }

  update(id: number, updateTinyUrlDto: UpdateTinyUrlDto) {
    return `This action updates a #${id} tinyUrl`;
  }

  remove(id: number) {
    return `This action removes a #${id} tinyUrl`;
  }
}
