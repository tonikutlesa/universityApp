import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Majors {
  @PrimaryKey({ columnType: "uuid" })
  majorId!: string;

  @Property({ length: 30 })
  name!: string;
}
