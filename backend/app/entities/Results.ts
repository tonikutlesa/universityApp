import { Entity, ManyToOne, Property } from "@mikro-orm/core";
import { Exams } from "./Exams";
import { Students } from "./Students";

@Entity()
export class Results {
  @ManyToOne({
    entity: () => Students,
    fieldName: "student_id",
    primary: true,
    onDelete: "cascade",
  })
  studentId!: Students;

  @ManyToOne({ entity: () => Exams, fieldName: "exam_id", primary: true })
  examId!: Exams;

  @Property()
  grade!: number;
}
