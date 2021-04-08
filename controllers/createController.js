const db = require('../models');

const create = async (req, res) => {
  const { poster, name, desc, description, stars } = req.body;

  try {
    const film = await db.Film.create({
      poster,
      name,
      desc,
      description,
      stars,
    });

    return res.json(film);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = create;
