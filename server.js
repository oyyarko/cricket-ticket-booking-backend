require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectToDB } = require("./db/connect");
const cookieParser = require("cookie-parser");
const routes = require("./routes/MainRoutes");

const { app, server } = require("./socket/socket");

// const app = express();
const PORT = process.env.PORT;

server.listen(PORT, () => {
  connectToDB();
  console.log("Server is connected", PORT);
  // insertDummyBlocks()
  // createDummySeats()
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/", routes);
