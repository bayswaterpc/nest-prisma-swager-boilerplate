import { Test, TestingModule } from '@nestjs/testing';
import { TinyUrlController } from './tiny-url.controller';
import { TinyUrlService } from './tiny-url.service';

describe('TinyUrlController', () => {
  let controller: TinyUrlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TinyUrlController],
      providers: [TinyUrlService],
    }).compile();

    controller = module.get<TinyUrlController>(TinyUrlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
