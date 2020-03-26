import { Base } from './base';
import { Column, Entity } from 'typeorm';

@Entity()
export class Subject extends Base{
  @Column()
  title: string;
  @Column()
  description: string;
}