const router = require('express').Router();
const controllers = require('../controllers');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/api/v1/create', controllers.create);
router.get('/api/v1/health', controllers.health);
router.get('/api/v1/find', controllers.find);
router.get('/api/v1/find/:id', controllers.findOne);
router.delete('/api/v1/find/:id', controllers.deleteFilm);
router.put('/api/v1/put/:id', controllers.put);

router.post('/api/v1/sign-up', controllers.userController.registration);
router.post('/api/v1/sign-in', controllers.userController.login);
router.get('/api/v1/auth', authMiddleware, controllers.userController.check);

module.exports = router;
