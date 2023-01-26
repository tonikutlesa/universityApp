import { RequestHandler } from "express";
import crudController from "./crudController";
import DI from "../app";

const createEnrollment: RequestHandler = async (req, res) => {
  await crudController.createInstance(DI.enrollmentsRepository, req, res);
};

const getAllEnrollments: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["studentId", "courseId"];

  await crudController.getAll(DI.enrollmentsRepository, populationArray, res);
};

const getEnrollmentById: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["studentId", "courseId"];
  const filterQuery: Object = {
    studentId: req.params.student_id,
    courseId: req.params.course_id,
  };

  await crudController.getInstance(
    DI.enrollmentsRepository,
    filterQuery,
    populationArray,
    req,
    res
  );
};

const updateEnrollment: RequestHandler = async (req, res) => {
  const filterQuery: Object = {
    studentId: req.params.student_id,
    courseId: req.params.course_id,
  };

  await crudController.updateInstance(
    DI.enrollmentsRepository,
    filterQuery,
    req,
    res
  );
};

const deleteEnrollment: RequestHandler = async (req, res) => {
  const filterQuery: Object = {
    studentId: req.params.student_id,
    courseId: req.params.course_id,
  };

  await crudController.deleteInstance(
    DI.enrollmentsRepository,
    filterQuery,
    req,
    res
  );
};

export default {
  createEnrollment,
  getAllEnrollments,
  getEnrollmentById,
  updateEnrollment,
  deleteEnrollment,
};
