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
import { QuestionService } from './services/question.service';
import {MongooseModule} from "@nestjs/mongoose";
import {categorySchema} from "./models/mongoose-schema/catagories.model";

@Module({
  imports: [
      MongooseModule.forFeature([{
          name:'Category',
          schema:categorySchema,
          collection:'categories'
      }]),
      MongooseModule.forRoot("mongodb://localhost:27017/prepara"),

  ],
  controllers: [
    CategoryController,
  ],
  providers: [
    CategoryService,
  ],
})
export class AppModule {}
