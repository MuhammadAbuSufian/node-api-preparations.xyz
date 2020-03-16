import { Base } from './base';
import { Column } from 'typeorm';

export class Chapter extends Base{
  @Column()
  title: string;
  @Column()
  description: string;
}