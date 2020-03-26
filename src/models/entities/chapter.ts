import { Base } from './base';
import { Column, Entity } from 'typeorm';
@Entity()
export class Chapter extends Base{
  @Column()
  title: string;
  @Column()
  description: string;
}