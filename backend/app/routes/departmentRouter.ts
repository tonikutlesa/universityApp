import { Router } from "express";
import departmentController from "../controllers/departmentController";

const router = Router({ mergeParams: true });

router
  .route("/")
  .get(departmentController.getAllDepartments)
  .post(departmentController.createDepartment);

router
  .route("/:id")
  .get(departmentController.getDepartmentById)
  .put(departmentController.updateDepartment)
  .delete(departmentController.deleteDepartment);

router
  .route("/:id/professors")
  .get(departmentController.getDepartmentProfessors);

export default router;
