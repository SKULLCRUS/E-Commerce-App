import express from "express"
import rateProduct from "../controllers/product/rateProduct.js"

const router = express.Router()

router.post("/", rateProduct)

export default router