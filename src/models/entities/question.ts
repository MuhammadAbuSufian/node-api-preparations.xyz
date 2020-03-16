import { Column, Entity, ObjectID } from 'typeorm';
import { Base } from './base';

@Entity()
export class Option extends Base{
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  categoryId: ObjectID;
  @Column()
  subjectId: ObjectID;
  @Column()
  chapterId: ObjectID;
}