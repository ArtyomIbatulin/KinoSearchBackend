const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, login, isAdmin) => {
  return jwt.sign({ id, login, isAdmin }, process.env.SECRET_KEY, {
    expiresIn: '12h',
  });
};

const registration = async (req, res) => {
  const { login, password, isAdmin } = req.body;

  try {
    const candidate = await db.User.findOne({ where: { login } });

    if (candidate) {
      return res.json({ message: 'Такой логин уже существует' });
    }

    const hashPassword = await bcrypt.hash(password, 5);

    const user = await db.User.create({
      login,
      password: hashPassword,
      isAdmin,
    });

    const token = generateJwt(user.id, user.login, user.isAdmin);

    return res.json(token);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const login = async (req, res) => {
  const { login, password } = req.body;
  const user = await db.User.findOne({ where: { login } });
  if (!user) {
    return res.json({ message: 'Пользователь не найден' });
  }

  let comparePassword = bcrypt.compareSync(password, user.password);

  if (!comparePassword) {
    return res.json({ message: 'Пароль неверен' });
  }
  const token = generateJwt(user.id, user.login, user.isAdmin);

  return res.json(token);
};

const check = async (req, res) => {
  const token = generateJwt(req.user.id, req.user.login, req.user.role);
  return res.json(token);
};

const getUsers = async (req, res) => {
  try {
    const users = await db.User.findAll();

    return res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  registration,
  login,
  check,
  getUsers,
};
