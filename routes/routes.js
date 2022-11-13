const Controller = require("../controllers/control.js");
const router = require("express").Router();


router.get("/allproducts", Controller.getallproducts);

router.get("/getproduct/:id", Controller.getproductbyid);

router.put("/updateproduct/:id", Controller.updateproductbyid);

router.delete("/delproduct/:id", Controller.deleteproductbyid);

router.get("/randomproduct", Controller.pickrandomid);

router.post('/test', Controller.test);

router.post('/testdb', Controller.testdb);

router.get('/showall', Controller.showall);


module.exports = router;
