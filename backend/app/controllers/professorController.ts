import { RequestHandler } from "express";
import { Courses, Enrollments } from "../entities";
import crudController from "./crudController";
import DI from "../app";
import options from "../mikro-orm.config";

const createProfessor: RequestHandler = async (req, res) => {
  await crudController.createInstance(DI.professorsRepository, req, res);
};

const getAllProfessors: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["deparmentId"];

  await crudController.getAll(DI.professorsRepository, populationArray, res);
};

const getProfessorById: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["deparmentId"];
  const filterQuery: Object = { professorId: req.params.id };

  await crudController.getInstance(
    DI.professorsRepository,
    filterQuery,
    populationArray,
    req,
    res
  );
};

const updateProfessor: RequestHandler = async (req, res) => {
  const filterQuery = { professorId: req.params.id };

  await crudController.updateInstance(
    DI.professorsRepository,
    filterQuery,
    req,
    res
  );
};

const deleteProfessor: RequestHandler = async (req, res) => {
  const filterQuery = { professorId: req.params.id };

  await crudController.deleteInstance(
    DI.professorsRepository,
    filterQuery,
    req,
    res
  );
};

const getProfessorCourses: RequestHandler = async (req, res) => {
  try {
    const professorCourses = await DI.em.find(
      Courses,
      {
        professorId: { professorId: req.params.id },
      },
      { fields: ["name", "ects"] }
    );

    professorCourses.length
      ? res.status(200).json(professorCourses)
      : res
          .status(404)
          .json({ message: "Professor has no active enrollments" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  createProfessor,
  getAllProfessors,
  updateProfessor,
  deleteProfessor,
  getProfessorById,
  getProfessorCourses,
};
