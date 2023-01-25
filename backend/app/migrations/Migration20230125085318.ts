import { Migration } from '@mikro-orm/migrations';

export class Migration20230125085318 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "courses" drop constraint "courses_professor_id_foreign";');

    this.addSql('alter table "exams" drop constraint "exams_course_id_foreign";');

    this.addSql('alter table "results" drop constraint "results_exam_id_foreign";');

    this.addSql('alter table "enrollments" drop constraint "enrollments_course_id_foreign";');

    this.addSql('alter table "courses" add constraint "courses_professor_id_foreign" foreign key ("professor_id") references "professors" ("professor_id") on update cascade on delete cascade;');

    this.addSql('alter table "exams" add constraint "exams_course_id_foreign" foreign key ("course_id") references "courses" ("course_id") on update cascade on delete cascade;');

    this.addSql('alter table "results" add constraint "results_exam_id_foreign" foreign key ("exam_id") references "exams" ("exam_id") on update cascade on delete cascade;');

    this.addSql('alter table "enrollments" add constraint "enrollments_course_id_foreign" foreign key ("course_id") references "courses" ("course_id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "courses" drop constraint "courses_professor_id_foreign";');

    this.addSql('alter table "exams" drop constraint "exams_course_id_foreign";');

    this.addSql('alter table "results" drop constraint "results_exam_id_foreign";');

    this.addSql('alter table "enrollments" drop constraint "enrollments_course_id_foreign";');

    this.addSql('alter table "courses" add constraint "courses_professor_id_foreign" foreign key ("professor_id") references "professors" ("professor_id") on update cascade;');

    this.addSql('alter table "exams" add constraint "exams_course_id_foreign" foreign key ("course_id") references "courses" ("course_id") on update cascade;');

    this.addSql('alter table "results" add constraint "results_exam_id_foreign" foreign key ("exam_id") references "exams" ("exam_id") on update cascade;');

    this.addSql('alter table "enrollments" add constraint "enrollments_course_id_foreign" foreign key ("course_id") references "courses" ("course_id") on update cascade;');
  }

}
