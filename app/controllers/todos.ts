import { RequestHandler } from "express";

import { Student } from "../models/student";

const STUDENTS: Student[] = [];

export const createStudent: RequestHandler = (req, res, next) => {
  const name = (req.body as { name: string }).name;
  const newStudent = new Student(Math.random().toString(), name);

  STUDENTS.push(newStudent);

  res
    .status(201)
    .json({ message: "Created student.", createdStudent: newStudent });
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
