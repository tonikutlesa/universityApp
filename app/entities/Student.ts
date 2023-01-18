// Packages
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Student {
  @PrimaryKey()
  public id!: number;

  @Property()
  public name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}
