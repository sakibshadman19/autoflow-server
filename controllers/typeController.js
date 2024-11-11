const Type = require('../models/type');

const getAllTypes = async (req, res) => {
  try {
    const types = await Type.find();
    res.json(types);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


const createType = async (req, res) => {
  try {
    const { name, category } = req.body;
    const newType = new Type({ name, category });
    await newType.save();
    res.json(newType);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllTypes,
  createType,
};
