import express from "express";
import dotenv from "dotenv";
import router from "./routes/mainRouter";
import cors from "cors";
import { RequestContext } from "@mikro-orm/core";
import { DI, initMikroORM } from "./mikro-orm";

dotenv.config();
const port = process.env.PORT;
const host = process.env.HOST;

initMikroORM();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use((req, res, next) => RequestContext.create(DI.orm.em, next));
app.use("/", router);

DI.server = app.listen(port, () => {
  console.log(`MikroORM express TS server started at http://${host}:${port}`);
});

export default DI;
