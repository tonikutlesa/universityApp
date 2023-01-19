import { Options } from "@mikro-orm/core";
import { Students } from "./entities/Students";
import { Professors } from "./entities/Professors";
import { Courses } from "./entities/Courses";
import { Departments } from "./entities/Departments";
import { Enrollments } from "./entities/Enrollments";
import { Exams } from "./entities/Exams";
import { Majors } from "./entities/Majors";
import { Results } from "./entities/Results";

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
  host: "localhost",
  port: 5432,
  debug: true,
  migrations: { path: "dist/migrations", pathTs: "app/migrations" },
};

export default options;
