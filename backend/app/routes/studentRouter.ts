import { Router } from "express";
import controller from "../controllers/studentController";

const router = Router();

router.post("/", controller.createStudent);
router.get("/", controller.getAllStudents);
router.patch("/:id", controller.updateStudent);
router.delete("/:id", controller.deleteStudent);

export default router;
