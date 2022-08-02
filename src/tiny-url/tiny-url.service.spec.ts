import { Test, TestingModule } from '@nestjs/testing';
import { TinyUrlService } from './tiny-url.service';

describe('TinyUrlService', () => {
  let service: TinyUrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TinyUrlService],
    }).compile();

    service = module.get<TinyUrlService>(TinyUrlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
