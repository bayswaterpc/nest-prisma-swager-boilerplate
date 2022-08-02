import { ApiProperty } from '@nestjs/swagger';

export class UserSentTinyUrlDto {
  @ApiProperty({ required: false, default: 'www.tinyknockoff.com' })
  base: string;
  targetUrl: string;
}

export class ServiceTinyUrlDto implements UserSentTinyUrlDto {
  base: string;
  targetUrl: string;
  userId: string;
}
