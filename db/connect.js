require("dotenv").config();
const mongoose = require("mongoose");

const connectToDB = () =>
  mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("MongoDB is connected!"))
    .catch((err) => console.log("err---->", err));

module.exports = { connectToDB };
