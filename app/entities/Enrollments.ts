import { Entity, ManyToOne } from '@mikro-orm/core';
import { Courses } from './Courses';
import { Students } from './Students';

@Entity()
export class Enrollments {

  @ManyToOne({ entity: () => Students, fieldName: 'student_id' })
  studentId!: Students;

  @ManyToOne({ entity: () => Courses, fieldName: 'course_id' })
  courseId!: Courses;

}
