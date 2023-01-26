import { RequestHandler } from "express";
import { Enrollments, Results } from "../entities";
import crudController from "./crudController";
import DI from "../app";

const createStudent: RequestHandler = async (req, res) => {
  await crudController.createInstance(DI.studentsRepository, req, res);
};

const getAllStudents: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["majorId"];

  await crudController.getAll(DI.studentsRepository, populationArray, res);
};

const getStudentById: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["majorId"];
  const filterQuery: Object = { studentId: req.params.id };

  await crudController.getInstance(
    DI.studentsRepository,
    filterQuery,
    populationArray,
    req,
    res
  );
};

const updateStudent: RequestHandler = async (req, res) => {
  const filterQuery = { studentId: req.params.id };

  await crudController.updateInstance(
    DI.studentsRepository,
    filterQuery,
    req,
    res
  );
};

const deleteStudent: RequestHandler = async (req, res) => {
  const filterQuery = { studentId: req.params.id };

  await crudController.deleteInstance(
    DI.studentsRepository,
    filterQuery,
    req,
    res
  );
};

const getStudentEnrollments: RequestHandler = async (req, res) => {
  try {
    const studentEnrollments = await DI.em.find(
      Enrollments,
      {
        studentId: { studentId: req.params.id },
      },
      { populate: ["courseId"] }
    );

    studentEnrollments.length
      ? res
          .status(200)
          .json(studentEnrollments.map((enrollment) => enrollment.courseId))
      : res.status(404).json({ message: "Student has no active enrollments" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getStudentResults: RequestHandler = async (req, res) => {
  try {
    const studentResults = await DI.em.find(
      Results,
      {
        studentId: { studentId: req.params.id },
      },
      { populate: ["examId", "examId.courseId"] }
    );

    studentResults.length
      ? res.status(200).json({ studentResults })
      : res.status(404).json({ message: "Student has no active enrollments" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
  getStudentById,
  getStudentEnrollments,
  getStudentResults,
};
