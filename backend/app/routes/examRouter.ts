import { Router } from "express";
import examController from "../controllers/examController";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(examController.getAllExams)
  .post(examController.createExam);

router
  .route("/:id")
  .get(examController.getExamById)
  .put(examController.updateExam)
  .delete(examController.deleteExam);

export default router;
