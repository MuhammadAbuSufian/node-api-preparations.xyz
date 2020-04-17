import { Column, Entity, Index, ObjectID } from 'typeorm';
import { Base } from './base';
import { Option } from './option';
import { Category } from './category';
import { Subject } from './subject';
import { Chapter } from './chapter';

@Entity()
export class Question extends Base{
  @Index({ unique: true })
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  subject: Subject;
  @Column()
  chapter: Chapter;
  @Column()
  options: Option[];
  @Column(type => Category)
  categories: Category[];
}
