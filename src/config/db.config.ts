import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/entities/user.model';
import { Category } from '../models/entities/category';
import { Question } from '../models/entities/question';
import { Subject } from '../models/entities/Subject';
import { Chapter } from '../models/entities/chapter';
import { Option } from '../models/entities/Option';
import { CategoryMapping } from '../models/entities/category-mapping';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'preparations',
    entities: [
      User,
      Category,
      Question,
      Subject,
      Chapter,
      Option,
      CategoryMapping
    ],
    synchronize: true,
    },),
    TypeOrmModule.forFeature([
      User,
      Category,
      Question,
      Subject,
      Chapter,
      Option,
      CategoryMapping
    ])
  ],
  exports: [TypeOrmModule]
})
export class DbConfigModule {
}
