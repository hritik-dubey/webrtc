import config from "./config/config";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
const app = express();

app.use(cors)

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    console.log("new user connected")
    socket.on("disconnect", () => {
        console.log("user disconnected")
    })
})

server.listen(config.PORT, () => {
    console.log(`app is listing on the port ${config.PORT}`);
});