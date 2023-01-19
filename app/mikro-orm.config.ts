import { Options } from "@mikro-orm/core";
//import { Student } from "./entities/Student";

const options: Options = {
  type: "postgresql",
  entities: [],
  user: "postgres",
  password: "postgres",
  dbName: "db_mikro",
  host: "localhost",
  port: 5432,
  debug: true,
};

export default options;
