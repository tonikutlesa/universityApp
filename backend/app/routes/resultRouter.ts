import { Router } from "express";
import resultController from "../controllers/resultController";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(resultController.getAllResults)
  .post(resultController.createResult);

router
  .route("/:student_id/:exam_id")
  .get(resultController.getResulttById)
  .put(resultController.updateResult)
  .delete(resultController.deleteResult);

export default router;
