import { Router } from "express";
import {
  createStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
} from "../controllers/student";
import { exampleMiddleware } from "../middlewares/exampleMiddleware";

const router = Router();

router.post("/", createStudent);

router.get("/", exampleMiddleware, getAllStudents);

router.patch("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;
