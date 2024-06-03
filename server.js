require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectToDB } = require("./db/connect");
const cookieParser = require("cookie-parser");
// const { insertDummyBlocks } = require("./utils/insertDummyBlocks");
const routes = require("./routes/MainRoutes");
const { createDummySeats } = require("./utils/createDummySeats");

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, () => {
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
