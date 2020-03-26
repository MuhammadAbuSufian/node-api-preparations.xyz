import { Column, Entity } from 'typeorm';
import { Base } from './base';
@Entity()
export class Category extends Base{
  @Column()
  title: string;
  @Column()
  description: string;
}