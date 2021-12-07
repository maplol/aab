const Router = require("express");
const router = new Router();
const productController = require("../controllers/productController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/product", checkRole("ADMIN"), productController.createProduct);
router.put("/product", checkRole("ADMIN"), productController.editProduct);
router.delete("/product/:id", productController.removeProduct);
router.get("/product", productController.getAllProduct);
router.get("/product/:id", productController.getOneProduct);
router.get("/:type", productController.typeProduct);
//router.get("/:type/?price=:price?", productController.filterProduct);

// router.get("/:type//", productController.filterProduct);

module.exports = router;
