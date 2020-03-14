import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConfigModule } from './config/db.config';
import { UserService } from './services/user.service';
import { QuestionController } from './controllers/question.controller';

@Module({
  imports: [
    DbConfigModule,
  ],
  controllers: [
    AppController,
    QuestionController
  ],
  providers: [
    AppService,
    UserService
  ],
})
export class AppModule {}
