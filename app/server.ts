import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import studentRoutes from "./routes/students";
import http from "http";
import {
  EntityManager,
  EntityRepository,
  MikroORM,
  RequestContext,
} from "@mikro-orm/core";
import { Students } from "./entities/Students";
import { Professors } from "./entities/Professors";
import { Courses } from "./entities/Courses";
import { Departments } from "./entities/Departments";
import { Enrollments } from "./entities/Enrollments";
import { Exams } from "./entities/Exams";
import { Majors } from "./entities/Majors";
import { Results } from "./entities/Results";

export const DI = {} as {
  server: http.Server;
  orm: MikroORM;
  em: EntityManager;
  studentsRepository: EntityRepository<Students>;
  professorsRepository: EntityRepository<Professors>;
  coursesRepository: EntityRepository<Courses>;
  departmentsRepository: EntityRepository<Departments>;
  enrollmentsRepository: EntityRepository<Enrollments>;
  examsRepository: EntityRepository<Exams>;
  majorsRepository: EntityRepository<Majors>;
  resultsRepository: EntityRepository<Results>;
};

dotenv.config();

const app = express();
const port = process.env.PORT;

export const init = (async () => {
  DI.orm = await MikroORM.init();
  DI.em = DI.orm.em;
  DI.studentsRepository = DI.orm.em.getRepository(Students);
  DI.professorsRepository = DI.orm.em.getRepository(Professors);
  DI.coursesRepository = DI.orm.em.getRepository(Courses);
  DI.departmentsRepository = DI.orm.em.getRepository(Departments);
  DI.enrollmentsRepository = DI.orm.em.getRepository(Enrollments);
  DI.examsRepository = DI.orm.em.getRepository(Exams);
  DI.majorsRepository = DI.orm.em.getRepository(Majors);
  DI.resultsRepository = DI.orm.em.getRepository(Results);

  app.use(express.json());
  app.use((req, res, next) => RequestContext.create(DI.orm.em, next));
  app.get("/", (req, res) =>
    res.json({
      message:
        "Welcome to MikroORM express TS application, try CRUD on /student endpoint!",
    })
  );
  //app.use("/student", studentRoutes);
  app.use((req, res) => res.status(404).json({ message: "No route found" }));

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
  });

  DI.server = app.listen(port, () => {
    console.log(
      `MikroORM express TS server started at http://localhost:${port}`
    );
  });
})();
