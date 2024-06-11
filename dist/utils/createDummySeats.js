const BlockModel = require("../models/BlockModel");
const SeatModel = require("../models/SeatModel");

async function createDummySeats() {
  try {
    const blocks = await BlockModel.find();

    for (const block of blocks) {
      const { rowsCount, colsCount } = block;

      const seats = [];
      for (let row = 1; row <= rowsCount; row++) {
        for (let col = 1; col <= colsCount; col++) {
          seats.push({
            block: block._id,
            row,
            col,
            status: 0,
            selectedBy: null,
            price: block.level == 1 ? 800 : 2400
          });
        }
      }

      await SeatModel.insertMany(seats);
    }

    console.log("Dummy seats created successfully");
  } catch (error) {
    console.error("Error creating dummy seats:", error);
  }
}

// createDummySeats();

module.exports = { createDummySeats };
//# sourceMappingURL=createDummySeats.js.map