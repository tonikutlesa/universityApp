import { errorMonitor } from "events";
import { RequestHandler } from "express";
import { Student } from "../models/student";

import { DI } from "../server";

const STUDENTS: Student[] = [];

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

  // const name = (req.body as { name: string }).name;
  // const newStudent = new Student(Math.random().toString(), name);

  // STUDENTS.push(newStudent);

  // res
  //   .status(201)
  //   .json({ message: "Created student.", createdStudent: newStudent });
};

export const getStudents: RequestHandler = (req, res, next) => {
  res.json({ students: STUDENTS });
};

export const updateStudent: RequestHandler<{ id: string }> = (
  req,
  res,
  next
) => {
  const studentId = req.params.id;

  const updatedName = (req.body as { name: string }).name;

  const studentIndex = STUDENTS.findIndex(
    (student) => student.id === studentId
  );

  if (studentIndex < 0) {
    throw new Error("Could not find todo!");
  }

  STUDENTS[studentIndex] = new Student(STUDENTS[studentIndex].id, updatedName);

  res.json({ message: "Updated!", updatedStudent: STUDENTS[studentIndex] });
};

export const deleteStudent: RequestHandler = (req, res, next) => {
  const studentId = req.params.id;

  const studentIndex = STUDENTS.findIndex(
    (student) => student.id === studentId
  );

  if (studentIndex < 0) {
    throw new Error("Could not find todo!");
  }

  STUDENTS.splice(studentIndex, 1);

  res.json({ message: "Student deleted!" });
};
