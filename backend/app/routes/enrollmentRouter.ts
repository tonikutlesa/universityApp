import { Router } from "express";
import enrollmentController from "../controllers/enrollmentController";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(enrollmentController.getAllEnrollments)
  .post(enrollmentController.createEnrollment);

router
  .route("/:student_id/:course_id")
  .get(enrollmentController.getEnrollmentById)
  .put(enrollmentController.updateEnrollment)
  .delete(enrollmentController.deleteEnrollment);

export default router;
