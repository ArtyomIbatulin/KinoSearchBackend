const health = require('./healthController');
const create = require('./createController');
const find = require('./findController');
const findOne = require('./findOneController');
const deleteFilm = require('./deleteController');
const put = require('./putController');
const createUser = require('./userController');

module.exports = { health, create, find, findOne, deleteFilm, put, createUser };
