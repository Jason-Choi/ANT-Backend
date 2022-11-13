const testcontroller = require('../controllers/testcontroller');
const router = require('express').Router();

router.post('/test', testcontroller.test);

module.exports = router;
