require("dotenv").config();
const mongoose = require("mongoose");
const { connectToDB } = require("../db/connect");
const BlockModel = require("../models/BlockModel");

const insertDummyBlocks = async () => {
  await connectToDB();

  const blocks = [{
    name: "Block A",
    rowsCount: 10,
    colsCount: 15,
    color: "#FF5733",
    level: 1
  }, {
    name: "Block B",
    rowsCount: 8,
    colsCount: 20,
    color: "#33FF57",
    level: 1
  }, {
    name: "Block C",
    rowsCount: 12,
    colsCount: 18,
    color: "#3357FF",
    level: 1
  }, {
    name: "Block D",
    rowsCount: 15,
    colsCount: 15,
    color: "#F3FF33",
    level: 1
  }, {
    name: "Block E",
    rowsCount: 9,
    colsCount: 22,
    color: "#FF33F6",
    level: 1
  }, {
    name: "Block G",
    rowsCount: 10,
    colsCount: 15,
    color: "#FF5733",
    level: 1
  }, {
    name: "Block H",
    rowsCount: 8,
    colsCount: 20,
    color: "#33FF57",
    level: 1
  }, {
    name: "Block I",
    rowsCount: 12,
    colsCount: 18,
    color: "#3357FF",
    level: 2
  }, {
    name: "Block J",
    rowsCount: 15,
    colsCount: 15,
    color: "#F3FF33",
    level: 2
  }, {
    name: "Block K",
    rowsCount: 9,
    colsCount: 22,
    color: "#FF33F6",
    level: 2
  }, {
    name: "Block L",
    rowsCount: 10,
    colsCount: 15,
    color: "#FF5733",
    level: 2
  }, {
    name: "Block M",
    rowsCount: 8,
    colsCount: 20,
    color: "#33FF57",
    level: 2
  }, {
    name: "Block N",
    rowsCount: 12,
    colsCount: 18,
    color: "#3357FF",
    level: 2
  }, {
    name: "Block O",
    rowsCount: 15,
    colsCount: 15,
    color: "#F3FF33",
    level: 2
  }, {
    name: "Block P",
    rowsCount: 9,
    colsCount: 22,
    color: "#FF33F6",
    level: 2
  }];

  try {
    await BlockModel.insertMany(blocks);
    console.log("Dummy blocks added");
  } catch (error) {
    console.log("error :>> ", error);
  } finally {
    mongoose.connection.close();
  }
};

module.exports = { insertDummyBlocks };
//# sourceMappingURL=insertDummyBlocks.js.map