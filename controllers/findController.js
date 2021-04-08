const db = require('../models');

const find = async (req, res) => {
  try {
    const films = await db.Film.findAll();

    return res.json(films);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = find;
