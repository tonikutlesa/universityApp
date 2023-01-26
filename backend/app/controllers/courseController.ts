import { RequestHandler } from "express";
import crudController from "./crudController";
import { Enrollments } from "../entities";
import DI from "../app";

const createCourse: RequestHandler = async (req, res) => {
  await crudController.createInstance(DI.coursesRepository, req, res);
};

const getAllCourses: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["professorId"];

  await crudController.getAll(DI.coursesRepository, populationArray, res);
};

const getCourseById: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["professorId"];
  const filterQuery: Object = { courseId: req.params.id };

  await crudController.getInstance(
    DI.coursesRepository,
    filterQuery,
    populationArray,
    req,
    res
  );
};

const updateCourse: RequestHandler = async (req, res) => {
  const filterQuery = { courseId: req.params.id };

  await crudController.updateInstance(
    DI.coursesRepository,
    filterQuery,
    req,
    res
  );
};

const deleteCourse: RequestHandler = async (req, res) => {
  const filterQuery = { courseId: req.params.id };

  await crudController.deleteInstance(
    DI.coursesRepository,
    filterQuery,
    req,
    res
  );
};

const getCourseProfessors: RequestHandler = async (req, res) => {
  // TODO:
  // make new ProffesorCourse entity and get all courseProfessors
  // reuse getCourseStudents controller
};

const getCourseStudents: RequestHandler = async (req, res) => {
  try {
    const courseStudents = await DI.em.find(
      Enrollments,
      {
        courseId: { courseId: req.params.id },
      },
      { populate: ["studentId"], fields: ["studentId.name"] }
    );
    courseStudents.length
      ? res.status(200).json({ courseStudents })
      : res
          .status(404)
          .json({ message: "There aro no students on this course" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  createCourse,
  getAllCourses,
  updateCourse,
  deleteCourse,
  getCourseById,
  getCourseProfessors,
  getCourseStudents,
};
