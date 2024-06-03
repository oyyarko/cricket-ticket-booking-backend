const mongoose = require("mongoose");

const seatSchema = mongoose.Schema({
  block: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Block",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  row: {
    type: Number,
    required: true,
  },
  col: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: Number,
    default: 0 // 0: empty, 1: selected
  },
});

module.exports = mongoose.model("Seat", seatSchema);
