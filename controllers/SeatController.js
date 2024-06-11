const BlockModel = require("../models/BlockModel");
const SeatModel = require("../models/SeatModel");
const { io } = require("../socket/socket");

module.exports.Seats = async (req, res, next) => {
  const blockId = req.params.blockId;
  try {
    const seats = await SeatModel.find({
      block: blockId,
    });
    res.json(seats);
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports.SelectSeats = async (req, res, next) => {
  try {
    const selectedSeats = req.body;
    const blockId = req.params.blockId;

    const block = await BlockModel.findById(blockId);
    if (!block) {
      return res.status(404).json({ message: "Block not found" });
    }

    for (const seatSelection of selectedSeats) {
      const row = seatSelection[0];
      const col = seatSelection[1];

      await SeatModel.findOneAndUpdate(
        { row, col, block: blockId },
        { status: 1 }
      );

      io.emit("booking", {
        status: 1,
        row: row - 1,
        col: col - 1,
        block: blockId,
      });
    }

    res.status(200).json({ message: "Seats selected successfully" });
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
