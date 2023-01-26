import { RequestHandler } from "express";
import { Professors } from "../entities";
import crudController from "./crudController";
import DI from "../app";

const createDepartment: RequestHandler = async (req, res) => {
  await crudController.createInstance(DI.departmentsRepository, req, res);
};

const getAllDepartments: RequestHandler = async (req, res) => {
  const populationArray: string[] = [];

  await crudController.getAll(DI.departmentsRepository, populationArray, res);
};

const getDepartmentById: RequestHandler = async (req, res) => {
  const populationArray: string[] = [];
  const filterQuery: Object = { deparmentId: req.params.id };

  await crudController.getInstance(
    DI.departmentsRepository,
    filterQuery,
    populationArray,
    req,
    res
  );
};

const updateDepartment: RequestHandler = async (req, res) => {
  const filterQuery = { deparmentId: req.params.id };

  await crudController.updateInstance(
    DI.departmentsRepository,
    filterQuery,
    req,
    res
  );
};

const deleteDepartment: RequestHandler = async (req, res) => {
  const filterQuery = { deparmentId: req.params.id };

  await crudController.deleteInstance(
    DI.departmentsRepository,
    filterQuery,
    req,
    res
  );
};

const getDepartmentProfessors: RequestHandler = async (req, res) => {
  try {
    const departmentProfessors = await DI.em.find(Professors, {
      deparmentId: { deparmentId: req.params.id },
    });
    departmentProfessors.length
      ? res.status(200).json({ departmentProfessors })
      : res
          .status(404)
          .json({ message: "There aro no professors in this department" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export default {
  createDepartment,
  getAllDepartments,
  updateDepartment,
  deleteDepartment,
  getDepartmentById,
  getDepartmentProfessors,
};
