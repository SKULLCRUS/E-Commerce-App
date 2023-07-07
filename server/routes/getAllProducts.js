import express from "express"
import getAllProducts from "../controllers/admin/getAllProducts.js"

const router = express.Router()

router.get("/", getAllProducts)

export default router