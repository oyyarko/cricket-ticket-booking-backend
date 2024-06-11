const BlockModel = require("../models/BlockModel");

module.exports.Block = async (req, res, next) => {
  try {
    const blocks = await BlockModel.find()
      .sort({ name: 1 })
      .select("name level");
    res.status(200).json(blocks);
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
