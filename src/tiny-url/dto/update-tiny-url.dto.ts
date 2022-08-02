import { PartialType } from '@nestjs/swagger';
import { UserSentTinyUrlDto } from './create-tiny-url.dto';

export class UpdateTinyUrlDto extends PartialType(UserSentTinyUrlDto) {}
