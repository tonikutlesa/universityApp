import { Router } from "express";
import courseController from "../controllers/courseController";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.createCourse);

router
  .route("/:id")
  .get(courseController.getCourseById)
  .put(courseController.updateCourse)
  .delete(courseController.deleteCourse);

router.route("/:id/professors").get(courseController.getCourseProfessors);

router.route("/:id/students").get(courseController.getCourseStudents);

export default router;
