import httpServer from "./http.ts";
import dotenv from "dotenv";

dotenv.config();

const HTTP_PORT = process.env.HTTP_PORT || 5000;

httpServer.listen(HTTP_PORT, () => {
  console.log("server has started");
});
