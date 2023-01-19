import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Departments {

  @PrimaryKey({ columnType: 'uuid' })
  deparmentId!: string;

  @Property({ length: 30 })
  name!: string;

}
