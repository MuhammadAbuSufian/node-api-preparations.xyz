import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConfigModule } from './config/db.config';
import { UserService } from './services/user.service';
import { QuestionController } from './controllers/question.controller';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';

@Module({
  imports: [
    DbConfigModule,
  ],
  controllers: [
    AppController,
    QuestionController,
    CategoryController
  ],
  providers: [
    AppService,
    UserService,
    CategoryService
  ],
})
export class AppModule {}
