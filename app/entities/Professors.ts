import { Entity, ManyToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Departments } from './Departments';

@Entity()
export class Professors {

  @PrimaryKey({ columnType: 'uuid' })
  professorId!: string;

  @Property({ length: 30 })
  name!: string;

  @Property({ length: 30 })
  email!: string;

  @Property({ length: 30 })
  address!: string;

  @Property({ length: 15 })
  phoneNumber!: string;

  @ManyToOne({ entity: () => Departments, fieldName: 'deparment_id' })
  deparmentId!: Departments;

}
