import { Router } from "express";
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} from "../controllers/todos";
import { exampleMiddleware } from "../middlewares/exampleMiddleware";

const router = Router();

router.post("/", createStudent);

router.get("/", exampleMiddleware, getStudents);

router.patch("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;
