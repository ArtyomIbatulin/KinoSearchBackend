const router = require('express').Router();
const controllers = require('../controllers');
const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');
const categoryController = require('../controllers/categoryController');

router.post('/api/v1/create', controllers.create);
router.get('/api/v1/health', controllers.health);
router.get('/api/v1/find', controllers.find);
router.get('/api/v1/find/:id', controllers.findOne);
router.delete('/api/v1/find/:id', controllers.deleteFilm);
router.put('/api/v1/put/:id', controllers.put);

router.post('/api/v1/sign-up', userController.registration);
router.post('/api/v1/sign-in', userController.login);
router.get('/api/v1/auth', authMiddleware, userController.check);
router.get('/api/v1/getUsers', userController.getUsers);

router.post('/api/v1/createCategory', categoryController.createCategory);
router.put('/api/v1/changeCategory/:id', categoryController.changeCategory);
router.delete('/api/v1/delCategory/:id', categoryController.deleteCategory);
router.get('/api/v1/findCategory', categoryController.findCategory);

module.exports = router;
