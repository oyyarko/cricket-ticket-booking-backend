require("dotenv").config();
const mongoose = require("mongoose");

const connectToDB = () =>
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB is connected!"))
    .catch((err) => console.log("err---->", err));

module.exports = { connectToDB };
