import { Column, Entity } from 'typeorm';
import { Base } from './base';

@Entity()
export class CategoryMapping extends Base{
  @Column()
  questionId: string;
  @Column()
  categoryId: string;
}