import { Base } from './base';
import { Column } from 'typeorm';

export class Subject extends Base{
  @Column()
  title: string;
  @Column()
  description: string;
}