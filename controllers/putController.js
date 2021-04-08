const db = require('../models');

const put = async (req, res) => {
  const id = req.params.id;
  const { poster, name, desc, description, stars } = req.body;

  try {
    await db.Film.update(
      {
        poster,
        name,
        desc,
        description,
        stars,
      },
      { where: { id } }
    );

    return res.json({ message: 'Фильм изменен' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = put;
