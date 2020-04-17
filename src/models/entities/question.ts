import { Column, Entity, Index, ObjectID } from 'typeorm';
import { Base } from './base';
import { Option } from './option';
import { Category } from './category';

@Entity()
export class Question extends Base{
  @Index({ unique: true })
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  subjectId: string;
  @Column()
  chapterId: string;
  @Column()
  options: Option[];
  @Column()
  Categories: Category[];
}