import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
export class Option extends BaseModel{
  @Column()
  questionId: string;
  @Column()
  title: string;
  @Column()
  answer: boolean;

}