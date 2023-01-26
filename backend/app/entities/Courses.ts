import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Professors } from "./Professors";

@Entity()
export class Courses {
  @PrimaryKey({ columnType: "uuid" })
  courseId!: string;

  @Property({ length: 30 })
  name!: string;

  @Property()
  ects!: number;

  @ManyToOne({
    entity: () => Professors,
    fieldName: "professor_id",
    onDelete: "cascade",
  })
  professorId!: Professors;
}
