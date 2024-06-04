require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectToDB } = require("./db/connect");
const cookieParser = require("cookie-parser");
const routes = require("./routes/MainRoutes");

const { app, server } = require("./socket/socket");

// const app = express();
const PORT = process.env.PORT;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow specified methods
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // Allow specified headers
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

server.get("/", (req, res) => {
  res.send("Hello world")
})

server.listen(PORT, () => {
  connectToDB();
  console.log("Server is connected", PORT);
});

server.use(cookieParser());
server.use(express.json());

server.use("/", routes);
