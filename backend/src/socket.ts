import { Server } from "socket.io";
import httpServer from "./http.ts";

const io = new Server(httpServer, { path: "/socket", cleanupEmptyChildNamespaces: true });

io.on("connection", (websocket) => {
  websocket.send("connect");
});
