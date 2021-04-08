const db = require('../models');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  const { login, password, isAdmin } = req.body;

  try {
    const user = await db.User.create({
      login,
      password,
      isAdmin,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = createUser;
