require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectToDB } = require("./db/connect");
const cookieParser = require("cookie-parser");
const routes = require("./routes/MainRoutes");

const { app, server } = require("./socket/socket");

// const app = express();
const PORT = process.env.PORT;

app.use((req, res, next) => {
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

app.get("/", (req, res) => {
  res.send("Hello world")
})

server.listen(PORT, () => {
  connectToDB();
  console.log("Server is connected", PORT);
});

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/", routes);

module.exports = app;