const router = require('express').Router();
const controllers = require('../controllers');

router.post('/api/v1/create', controllers.create);
router.get('/api/v1/health', controllers.health);
router.get('/api/v1/find', controllers.find);
router.get('/api/v1/find/:id', controllers.findOne);
router.delete('/api/v1/find/:id', controllers.deleteFilm);
router.put('/api/v1/put/:id', controllers.put);

module.exports = router;
