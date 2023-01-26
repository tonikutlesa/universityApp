import { Router } from "express";
import studentRouter from "./studentRouter";
import professorRouter from "./professorRouter";
import enrollmentRouter from "./enrollmentRouter";
import courseRouter from "./courseRouter";
import resultRouter from "./resultRouter";
import departmentRouter from "./departmentRouter";
import majorRouter from "./majorRouter";
import examRouter from "./examRouter";

const router = Router();

router.use("/students", studentRouter);
router.use("/professors", professorRouter);
router.use("/enrollments", enrollmentRouter);
router.use("/courses", courseRouter);
router.use("/results", resultRouter);
router.use("/departments", departmentRouter);
router.use("/majors", majorRouter);
router.use("/exams", examRouter);

export default router;
