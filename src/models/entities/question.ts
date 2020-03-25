import { Column, Entity, ObjectID } from 'typeorm';
import { Base } from './base';

@Entity()
export class Question extends Base{
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  categoryId: string;
  @Column()
  subjectId: string;
  @Column()
  chapterId: string;
}