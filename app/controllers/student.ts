import { RequestHandler } from "express";
import { Student } from "../models/student";

import { DI } from "../server";

export const createStudent: RequestHandler = async (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ message: "Name is missing" });
  }

  try {
    const student = DI.studentRepository.create(req.body);
    await DI.studentRepository.persist(student).flush();

    res.json(student);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllStudents: RequestHandler = async (req, res, next) => {
  const students = await DI.studentRepository.findAll();

  res.status(200).json(students);
};

export const updateStudent: RequestHandler = async (req, res, next) => {
  const id = req.params.id;

  try {
    const studentToUpdate = await DI.em.findOneOrFail(Student, { id: id });
    studentToUpdate.name = req.body.name;

    await DI.em.persist(studentToUpdate).flush();
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }

  res.json({ message: "Updated!" });
};

export const deleteStudent: RequestHandler = async (req, res, next) => {
  try {
    const studentToRemove = await DI.em.findOneOrFail(Student, {
      id: req.params.id,
    });

    await DI.studentRepository.remove(studentToRemove).flush();
    res
      .status(200)
      .json({ message: `User with id: ${req.params.id} deleted.` });
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};
