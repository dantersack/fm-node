import express, { Express } from "express";
import cors from "cors";
import morgan from "morgan";

import router from "./router";
import { protect } from "./auth";
import { createNewUser, signIn } from "./handlers/user";

const app: Express = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", createNewUser);
app.post("/signin", signIn);
app.use("/api", protect, router);

export default app;
