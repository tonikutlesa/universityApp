import { Migration } from "@mikro-orm/migrations";

export class Migration20230119175800 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table "departments" ("deparment_id" uuid not null, "name" varchar(30) not null, constraint "departments_pkey" primary key ("deparment_id"));'
    );

    this.addSql(
      'create table "majors" ("major_id" uuid not null, "name" varchar(30) not null, constraint "majors_pkey" primary key ("major_id"));'
    );

    this.addSql(
      'create table "professors" ("professor_id" uuid not null, "name" varchar(30) not null, "email" varchar(30) not null, "address" varchar(30) not null, "phone_number" varchar(15) not null, "deparment_id" uuid not null, constraint "professors_pkey" primary key ("professor_id"));'
    );

    this.addSql(
      'create table "courses" ("course_id" uuid not null, "name" varchar(30) not null, "ects" int not null, "professor_id" uuid not null, constraint "courses_pkey" primary key ("course_id"));'
    );

    this.addSql(
      'create table "exams" ("exam_id" uuid not null, "name" varchar(30) not null, "exam_datetime" timestamptz(6) null, "course_id" uuid not null, constraint "exams_pkey" primary key ("exam_id"));'
    );

    this.addSql(
      'create table "students" ("student_id" uuid not null, "name" varchar(30) not null, "email" varchar(30) not null, "address" varchar(30) not null, "phone_number" varchar(15) not null, "major_id" uuid not null, constraint "students_pkey" primary key ("student_id"));'
    );

    this.addSql(
      'create table "results" ("student_id" uuid not null, "exam_id" uuid not null, "grade" int not null, constraint "results_pkey" primary key ("student_id", "exam_id"));'
    );

    this.addSql(
      'create table "enrollments" ("student_id" uuid not null, "course_id" uuid not null, constraint "enrollments_pkey" primary key ("student_id", "course_id"));'
    );

    this.addSql(
      'alter table "professors" add constraint "professors_deparment_id_foreign" foreign key ("deparment_id") references "departments" ("deparment_id") on update cascade;'
    );

    this.addSql(
      'alter table "courses" add constraint "courses_professor_id_foreign" foreign key ("professor_id") references "professors" ("professor_id") on update cascade;'
    );

    this.addSql(
      'alter table "exams" add constraint "exams_course_id_foreign" foreign key ("course_id") references "courses" ("course_id") on update cascade;'
    );

    this.addSql(
      'alter table "students" add constraint "students_major_id_foreign" foreign key ("major_id") references "majors" ("major_id") on update cascade;'
    );

    this.addSql(
      'alter table "results" add constraint "results_student_id_foreign" foreign key ("student_id") references "students" ("student_id") on update cascade;'
    );
    this.addSql(
      'alter table "results" add constraint "results_exam_id_foreign" foreign key ("exam_id") references "exams" ("exam_id") on update cascade;'
    );

    this.addSql(
      'alter table "enrollments" add constraint "enrollments_student_id_foreign" foreign key ("student_id") references "students" ("student_id") on update cascade;'
    );
    this.addSql(
      'alter table "enrollments" add constraint "enrollments_course_id_foreign" foreign key ("course_id") references "courses" ("course_id") on update cascade;'
    );
  }
}
