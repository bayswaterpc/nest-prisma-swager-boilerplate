import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Redirect,
} from '@nestjs/common';
import { TinyUrlService } from './tiny-url.service';
import { UserSentTinyUrlDto } from './dto/create-tiny-url.dto';
import { UpdateTinyUrlDto } from './dto/update-tiny-url.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tiny-url')
@Controller('tiny-url')
export class TinyUrlController {
  constructor(private readonly tinyUrlService: TinyUrlService) {}

  @Post()
  create(@Body() createTinyUrlDto: UserSentTinyUrlDto) {
    return this.tinyUrlService.create(createTinyUrlDto);
  }

  @Get()
  findAll() {
    return this.tinyUrlService.findAll();
  }

  @Get(':id')
  @Redirect('https://docs.nestjs.com', 302)
  async findOne(@Param('id') id: string) {
    console.log('id', id);
    const prisma_found = await this.tinyUrlService.findOne(id);
    return { url: prisma_found.targetUrl };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTinyUrlDto: UpdateTinyUrlDto) {
    return this.tinyUrlService.update(+id, updateTinyUrlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tinyUrlService.remove(+id);
  }
}
