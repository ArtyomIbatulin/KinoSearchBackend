const db = require('../models');

const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const film = await db.Film.findOne({ where: { id } });

    return res.json(film);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = findOne;
