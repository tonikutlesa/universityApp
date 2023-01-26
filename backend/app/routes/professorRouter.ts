import { Router } from "express";
import professorController from "../controllers/professorController";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(professorController.getAllProfessors)
  .post(professorController.createProfessor);

router
  .route("/:id")
  .get(professorController.getProfessorById)
  .put(professorController.updateProfessor)
  .delete(professorController.deleteProfessor);

router.route("/:id/courses").get(professorController.getProfessorCourses);

export default router;
