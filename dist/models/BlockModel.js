const mongoose = require("mongoose");

const blockSchema = mongoose.Schema({
  color: {
    type: String,
    default: "#f0eded"
  },
  name: {
    type: String
  },
  rowsCount: {
    type: Number,
    required: true
  },
  colsCount: {
    type: Number,
    required: true
  },
  level: {
    type: Number // 1: upper level, 2: lower level
  }
});

module.exports = mongoose.model("Block", blockSchema);
//# sourceMappingURL=BlockModel.js.map