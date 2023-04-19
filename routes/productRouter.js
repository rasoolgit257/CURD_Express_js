const router = require("express").Router()
const ProductController = require("../controllers/productController")

// Add
router.post("/",ProductController.addProduct)

// Get all
router.get("/",ProductController.getAllProduct)

// Get Single Product
router.get("/:productId",ProductController.getSingleProduct)

// Delete Single Product
router.delete("/:productId",ProductController.product_delete)

module.exports = router;