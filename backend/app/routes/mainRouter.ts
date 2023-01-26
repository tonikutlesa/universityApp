import { Router } from "express";
import studentRouter from "./studentRouter";
import professorRouter from "./professorRouter";
import enrollmentRouter from "./enrollmentRouter";
import courseRouter from "./courseCouter";

const router = Router();

router.use("/students", studentRouter);
router.use("/professors", professorRouter);
router.use("/enrollments", enrollmentRouter);
router.use("/courses", courseRouter);

export default router;
