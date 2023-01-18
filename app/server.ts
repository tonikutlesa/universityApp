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
import { Student } from "./entities/Student";

export const DI = {} as {
  server: http.Server;
  orm: MikroORM;
  em: EntityManager;
  studentRepository: EntityRepository<Student>;
};

dotenv.config();

const app = express();
const port = process.env.PORT;

export const init = (async () => {
  DI.orm = await MikroORM.init();
  DI.em = DI.orm.em;
  DI.studentRepository = DI.orm.em.getRepository(Student);

  app.use(express.json());
  app.use((req, res, next) => RequestContext.create(DI.orm.em, next));
  app.get("/", (req, res) =>
    res.json({
      message:
        "Welcome to MikroORM express TS application, try CRUD on /student endpoint!",
    })
  );
  app.use("/student", studentRoutes);
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
