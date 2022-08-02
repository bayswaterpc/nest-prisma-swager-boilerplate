import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TinyUrlModule } from './tiny-url/tiny-url.module';

@Module({
  imports: [
    PrismaModule,
    ArticlesModule,
    TodosModule,
    AuthModule,
    UsersModule,
    TinyUrlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
