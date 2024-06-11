const { Block } = require("../controllers/BlockController");
const { Seats, SelectSeats } = require("../controllers/SeatController");

const router = require("express").Router();

router.get("/blocks", Block);
router.get("/seats/:blockId", Seats);
router.post("/select-seats/:blockId", SelectSeats);

module.exports = router;
//# sourceMappingURL=MainRoutes.js.map