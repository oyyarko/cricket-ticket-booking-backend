const { Server } = require("socket.io");
const { createServer } = require("http");
const express = require("express");

const app = express();
const server = createServer(app);
let userCount = 0;

const io = new Server(server);

io.on("connection", socket => {
  userCount++;
  io.emit("userCountUpdate", userCount);

  socket.on("disconnect", () => {
    userCount--;
    io.emit("userCountUpdate", userCount);
  });
});

module.exports = { app, io, server };
//# sourceMappingURL=socket.js.map