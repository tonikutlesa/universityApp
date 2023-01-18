import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import studentRoutes from "./routes/students";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/students", studentRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
