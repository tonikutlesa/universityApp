import { RequestHandler } from "express";
import crudController from "./crudController";
import DI from "../app";

const createResult: RequestHandler = async (req, res) => {
  await crudController.createInstance(DI.resultsRepository, req, res);
};

const getAllResults: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["studentId", "examId"];

  await crudController.getAll(DI.resultsRepository, populationArray, res);
};

const getResulttById: RequestHandler = async (req, res) => {
  const populationArray: string[] = ["studentId", "examId"];
  const filterQuery: Object = {
    studentId: req.params.student_id,
    examId: req.params.exam_id,
  };

  await crudController.getInstance(
    DI.resultsRepository,
    filterQuery,
    populationArray,
    req,
    res
  );
};

const updateResult: RequestHandler = async (req, res) => {
  const filterQuery: Object = {
    studentId: req.params.student_id,
    examId: req.params.exam_id,
  };

  await crudController.updateInstance(
    DI.resultsRepository,
    filterQuery,
    req,
    res
  );
};

const deleteResult: RequestHandler = async (req, res) => {
  const filterQuery: Object = {
    studentId: req.params.student_id,
    examId: req.params.exam_id,
  };

  await crudController.deleteInstance(
    DI.resultsRepository,
    filterQuery,
    req,
    res
  );
};

export default {
  createResult,
  getAllResults,
  getResulttById,
  updateResult,
  deleteResult,
};
