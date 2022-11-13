const testcontroller = require('../controllers/testcontroller');
const router = require('express').Router();

router.post('/test', testcontroller.test);
router.post('/testdb', testcontroller.testdb);
router.post('/showall', testcontroller.getallproducts);

module.exports = router;
