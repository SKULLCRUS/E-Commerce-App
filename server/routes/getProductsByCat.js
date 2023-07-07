import express from "express"
import getProductByCategory from "../controllers/product/getProductByCat.js"

const router = express.Router()

router.get("/", getProductByCategory)

export default router