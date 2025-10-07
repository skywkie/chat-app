import express, { type Application } from "express";
import cors from "cors";

import { registerHandler } from "./handlers/register.ts";
import { loginHandler } from "./handlers/login.ts";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("success");
});

app.post("/sign-in", loginHandler);

app.post("/sign-up", registerHandler);

export default app;
