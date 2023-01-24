import { Options } from "@mikro-orm/core";
import dotenv from "dotenv";
import {
  Students,
  Professors,
  Courses,
  Departments,
  Enrollments,
  Exams,
  Majors,
  Results,
} from "./entities";

dotenv.config();
const host = process.env.host;

const options: Options = {
  type: "postgresql",
  entities: [
    Students,
    Professors,
    Courses,
    Departments,
    Enrollments,
    Exams,
    Majors,
    Results,
  ],
  user: "postgres",
  password: "postgres",
  dbName: "db_mikro",
  host: host,
  port: 5432,
  debug: true,
  migrations: { path: "dist/migrations", pathTs: "app/migrations" },
  seeder: { path: "dist/seeders", pathTs: "app/seeders" },
};

export default options;
