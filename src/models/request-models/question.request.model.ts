import { Option } from '../entities/option';
import { CategoryMapRequestModel } from './category-map.request.model';
import { Category } from '../entities/category';

export class QuestionRequestModel {
  title: string;
  options: Option[];
  categories: Category[]
  subjectId: string;
  chapterId: string;
}