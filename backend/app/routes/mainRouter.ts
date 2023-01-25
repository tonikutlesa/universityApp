import { Router } from "express";
import studentRouter from "./studentRouter";
import professorRouter from "./professorRouter";

const router = Router();

router.use("/students", studentRouter);
router.use("/professors", professorRouter);

export default router;
