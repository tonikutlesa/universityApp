import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Courses } from "./Courses";

@Entity()
export class Exams {
  @PrimaryKey({ columnType: "uuid" })
  examId!: string;

  @Property({ length: 30 })
  name!: string;

  @Property({ length: 6, nullable: true })
  examDatetime?: Date;

  @ManyToOne({ entity: () => Courses, fieldName: "course_id" })
  courseId!: Courses;
}
