import express, { json, type Application } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(json());

app.get("/", (request, response) => {
  response.send("success");
});

export default app;
