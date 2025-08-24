import http from "http";
import app from "./app.ts";

const httpServer = http.createServer(app);

export default httpServer;
