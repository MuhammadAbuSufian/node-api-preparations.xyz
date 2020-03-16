import { Column } from 'typeorm';
import { Base } from './base';

export class Category extends Base{
  @Column()
  title: string;
  @Column()
  description: string;
}