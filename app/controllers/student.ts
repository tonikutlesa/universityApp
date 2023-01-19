import { RequestHandler } from "express";
import { Students } from "../entities/Students";

import { DI } from "../server";

export const createStudent: RequestHandler = async (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ message: "Name is missing" });
  }

  try {
    const student = DI.studentsRepository.create(req.body);
    await DI.studentsRepository.persist(student).flush();

    res.json(student);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllStudents: RequestHandler = async (req, res, next) => {
  const students = await DI.studentsRepository.findAll();

  res.status(200).json(students);
};

export const updateStudent: RequestHandler = async (req, res, next) => {
  res.json({ message: "Updated!" });
};

export const deleteStudent: RequestHandler = async (req, res, next) => {
  res.json({ message: "Deleted!" });
};
