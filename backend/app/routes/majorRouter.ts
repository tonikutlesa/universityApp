import { Router } from "express";
import majorController from "../controllers/majorController";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(majorController.getAllMajors)
  .post(majorController.createMajor);

router
  .route("/:id")
  .get(majorController.getMajorById)
  .put(majorController.updateMajor)
  .delete(majorController.deleteMajor);

router.route("/:id/students").get(majorController.getMajorStudents);

export default router;
