import { Migration } from '@mikro-orm/migrations';

export class Migration20230120174355 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "students" drop constraint "students_major_id_foreign";');

    this.addSql('alter table "results" drop constraint "results_student_id_foreign";');

    this.addSql('alter table "enrollments" drop constraint "enrollments_student_id_foreign";');

    this.addSql('alter table "students" add constraint "students_major_id_foreign" foreign key ("major_id") references "majors" ("major_id") on update cascade;');

    this.addSql('alter table "results" add constraint "results_student_id_foreign" foreign key ("student_id") references "students" ("student_id") on update cascade on delete cascade;');

    this.addSql('alter table "enrollments" add constraint "enrollments_student_id_foreign" foreign key ("student_id") references "students" ("student_id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "students" drop constraint "students_major_id_foreign";');

    this.addSql('alter table "results" drop constraint "results_student_id_foreign";');

    this.addSql('alter table "enrollments" drop constraint "enrollments_student_id_foreign";');

    this.addSql('alter table "students" add constraint "students_major_id_foreign" foreign key ("major_id") references "majors" ("major_id") on update cascade on delete cascade;');

    this.addSql('alter table "results" add constraint "results_student_id_foreign" foreign key ("student_id") references "students" ("student_id") on update cascade;');

    this.addSql('alter table "enrollments" add constraint "enrollments_student_id_foreign" foreign key ("student_id") references "students" ("student_id") on update cascade;');
  }

}
