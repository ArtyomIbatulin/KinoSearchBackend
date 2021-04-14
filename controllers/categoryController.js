const db = require('../models');

const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const category = await db.Category.create({
      name,
    });

    return res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const changeCategory = async (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  try {
    const genreId = await db.Category.findOne({ where: { id } });
    if (!genreId) {
      return res.json({ message: 'Жанр с этим id не найден' });
    }

    await db.Category.update(
      {
        name,
      },
      { where: { id } }
    );

    return res.json({ message: 'Категория изменена' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;

  try {
    const genreId = await db.Category.findOne({ where: { id } });
    if (!genreId) {
      return res.json({ message: 'Жанр с этим id не найден' });
    }

    await db.Category.destroy({ where: { id } });

    return res.json({ message: 'Категория успешно удалена' });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findCategory = async (req, res) => {
  try {
    const category = await db.Category.findAll();

    return res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  createCategory,
  changeCategory,
  deleteCategory,
  findCategory,
};