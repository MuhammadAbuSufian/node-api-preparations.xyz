import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { Base } from './base';

@Entity()
export class User extends Base{
  @Column()
  firstName: string;
  @Column()
  lastName: string;
}