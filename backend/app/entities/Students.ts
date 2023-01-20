import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Majors } from "./Majors";

@Entity()
export class Students {
  @PrimaryKey({ columnType: "uuid" })
  studentId!: string;

  @Property({ length: 30 })
  name!: string;

  @Property({ length: 30 })
  email!: string;

  @Property({ length: 30 })
  address!: string;

  @Property({ length: 15 })
  phoneNumber!: string;

  @ManyToOne({ entity: () => Majors, fieldName: "major_id" })
  majorId!: Majors;
}
