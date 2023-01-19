import { RequestHandler } from "express";
import DI from "../app";

const createStudent: RequestHandler = async (req, res, next) => {
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

const getAllStudents: RequestHandler = async (req, res, next) => {
  const students = await DI.studentsRepository.findAll();

  res.status(200).json(students);
};

const updateStudent: RequestHandler = async (req, res, next) => {
  res.json({ message: "Updated!" });
};

const deleteStudent: RequestHandler = async (req, res, next) => {
  res.json({ message: "Deleted!" });
};

export default { createStudent, getAllStudents, updateStudent, deleteStudent };
