import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import router from "./routes/mainRouter";
import { RequestContext } from "@mikro-orm/core";
import { DI, initMikroORM } from "./mikro-orm";

dotenv.config();
const port = process.env.PORT;

initMikroORM();

const app = express();
app.use(express.json());
app.use((req, res, next) => RequestContext.create(DI.orm.em, next));
app.use("/", router);

DI.server = app.listen(port, () => {
  console.log(`MikroORM express TS server started at http://localhost:${port}`);
});

export default DI;
