import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { Exams } from './Exams';
import { Students } from './Students';

@Entity()
export class Results {

  @ManyToOne({ entity: () => Students, fieldName: 'student_id' })
  studentId!: Students;

  @ManyToOne({ entity: () => Exams, fieldName: 'exam_id' })
  examId!: Exams;

  @Property()
  grade!: number;

}
