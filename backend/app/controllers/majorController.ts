import { RequestHandler } from "express";
import { Students } from "../entities";
import crudController from "./crudController";
import DI from "../app";

const createMajor: RequestHandler = async (req, res) => {
  await crudController.createInstance(DI.majorsRepository, req, res);
};

const getAllMajors: RequestHandler = async (req, res) => {
  const populationArray: string[] = [];

  await crudController.getAll(DI.majorsRepository, populationArray, res);
};

const getMajorById: RequestHandler = async (req, res) => {
  const populationArray: string[] = [];
  const filterQuery: Object = { majorId: req.params.id };

  await crudController.getInstance(
    DI.majorsRepository,
    filterQuery,
    populationArray,
    req,
    res
  );
};

const updateMajor: RequestHandler = async (req, res) => {
  const filterQuery = { majorId: req.params.id };

  await crudController.updateInstance(
    DI.majorsRepository,
    filterQuery,
    req,
    res
  );
};

const deleteMajor: RequestHandler = async (req, res) => {
  const filterQuery = { majorId: req.params.id };

  await crudController.deleteInstance(
    DI.majorsRepository,
    filterQuery,
    req,
    res
  );
};

const getMajorStudents: RequestHandler = async (req, res) => {
  try {
    const majorStudents = await DI.em.find(Students, {
      majorId: { majorId: req.params.id },
    });
    majorStudents.length
      ? res.status(200).json({ majorStudents })
      : res
          .status(404)
          .json({ message: "There aro no students on this major" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  createMajor,
  getAllMajors,
  updateMajor,
  deleteMajor,
  getMajorById,
  getMajorStudents,
};
