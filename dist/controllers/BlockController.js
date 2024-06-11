const BlockModel = require("../models/BlockModel");

module.exports.Block = async (req, res, next) => {
  try {
    const blocks = await BlockModel.find().sort({ name: 1 }).select("name").select("level");
    res.json(blocks);
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//# sourceMappingURL=BlockController.js.map