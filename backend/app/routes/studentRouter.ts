import { Router } from "express";
import studentController from "../controllers/studentController";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(studentController.getAllStudents)
  .post(studentController.createStudent);

router
  .route("/:id")
  .get(studentController.getStudentById)
  .put(studentController.updateStudent)
  .delete(studentController.deleteStudent);

router.route("/:id/enrollments").get(studentController.getStudentEnrollments);
router.route("/:id/results").get(studentController.getStudentResults);

export default router;
