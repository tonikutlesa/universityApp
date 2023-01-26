import { RequestHandler } from "express";
import crudController from "./crudController";
import { Results } from "../entities";
import DI from "../app";

const createExam: RequestHandler = async (req, res) => {
  await crudController.createInstance(DI.examsRepository, req, res);
};

const getAllExams: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["courseId"];

  await crudController.getAll(DI.examsRepository, populationArray, res);
};

const getExamById: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["courseId"];
  const filterQuery: Object = { examId: req.params.id };

  await crudController.getInstance(
    DI.examsRepository,
    filterQuery,
    populationArray,
    req,
    res
  );
};

const updateExam: RequestHandler = async (req, res) => {
  const filterQuery = { examId: req.params.id };

  await crudController.updateInstance(
    DI.examsRepository,
    filterQuery,
    req,
    res
  );
};

const deleteExam: RequestHandler = async (req, res) => {
  const filterQuery = { examId: req.params.id };

  await crudController.deleteInstance(
    DI.examsRepository,
    filterQuery,
    req,
    res
  );
};

export default {
  createExam,
  getAllExams,
  updateExam,
  deleteExam,
  getExamById,
};
