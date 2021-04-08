const db = require('../models');

const deleteFilm = async (req, res) => {
  const id = req.params.id;

  try {
    await db.Film.destroy({ where: { id } });

    return res.json({ message: 'Фильм успешно удален' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = deleteFilm;
