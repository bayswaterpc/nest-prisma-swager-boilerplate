import { Module } from '@nestjs/common';
import { TinyUrlService } from './tiny-url.service';
import { TinyUrlController } from './tiny-url.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TinyUrlController],
  providers: [TinyUrlService],
  imports: [PrismaModule],
})
export class TinyUrlModule {}
