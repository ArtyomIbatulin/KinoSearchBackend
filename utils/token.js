const jwt = require('jsonwebtoken');

const generateJwt = (id, login, isAdmin) => {
  return jwt.sign({ id, login, isAdmin }, process.env.SECRET_KEY, {
    expiresIn: 60,
  });
};

module.exports = { generateJwt };
