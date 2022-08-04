const express=require("express")
const { getAllProduct } = require("../controllers/productcontrollers")
const { createProduct } = require("../controllers/productControllers")
const { updateProduct } = require("../controllers/productControllers")
const { deleteProduct } = require("../controllers/productControllers")
const { getProductDetails }=require("../controllers/productControllers")

const router=express.Router()
router.route("/products").get(getAllProduct)
router.route("/product/new").post(createProduct)
router.route("/product/:id").put(updateProduct)
router.route("/product/:id").delete(deleteProduct)
router.route("/product/:id").get(getProductDetails)

module.exports=router