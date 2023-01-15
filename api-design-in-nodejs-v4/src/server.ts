import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./router";

const app: Express = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
