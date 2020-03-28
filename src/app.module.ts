import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConfigModule } from './config/db.config';
import { UserService } from './services/user.service';
import { QuestionController } from './controllers/question.controller';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { SubjectController } from './controllers/subject.controller';
import { ChapterController } from './controllers/chapter.controller';
import { SubjectService } from './services/subject.service';
import { ChapterService } from './services/chapter.service';

@Module({
  imports: [
    DbConfigModule,
  ],
  controllers: [
    AppController,
    QuestionController,
    CategoryController,
    SubjectController,
    ChapterController
  ],
  providers: [
    AppService,
    UserService,
    CategoryService,
    SubjectService,
    ChapterService
  ],
})
export class AppModule {}
