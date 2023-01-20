import { EntityManager, EntityRepository, MikroORM } from "@mikro-orm/core";
import http from "http";
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

export const initMikroORM = async () => {
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
};
