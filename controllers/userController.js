const db = require('../models');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  const { login, password, isAdmin } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 5);

    const user = await db.User.create({
      login,
      password: hashPassword,
      isAdmin,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = createUser;
