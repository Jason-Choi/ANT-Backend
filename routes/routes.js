const productController = require("../controllers/control.js");
const router = require("express").Router();

router.get("/allproducts", productController.getallproducts);

router.get("/getproduct/:id", productController.getproductbyid);

router.put("/updateproduct/:id", productController.updateproductbyid);

router.delete("/delproduct/:id", productController.deleteproductbyid);

router.get("/randomproduct", productController.pickrandomid);

module.exports = router;



