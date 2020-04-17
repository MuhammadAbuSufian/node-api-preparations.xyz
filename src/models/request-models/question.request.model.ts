import { Option } from '../entities/option';
import { Category } from '../entities/category';
import { Subject } from '../entities/subject';
import { Chapter } from '../entities/chapter';

export class QuestionRequestModel {
  title: string;
  options: Option[];
  categories: Category[]
  subject: Subject;
  chapter: Chapter;
}
