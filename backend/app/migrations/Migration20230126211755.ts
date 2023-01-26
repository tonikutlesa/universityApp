import { Migration } from '@mikro-orm/migrations';

export class Migration20230126211755 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "professors" drop constraint "professors_deparment_id_foreign";');

    this.addSql('alter table "professors" add constraint "professors_deparment_id_foreign" foreign key ("deparment_id") references "departments" ("deparment_id") on update cascade on delete cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "professors" drop constraint "professors_deparment_id_foreign";');

    this.addSql('alter table "professors" add constraint "professors_deparment_id_foreign" foreign key ("deparment_id") references "departments" ("deparment_id") on update cascade;');
  }

}
