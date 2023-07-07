import express from "express"
import deleteProduct from "../controllers/admin/deleteProductById.js"

const router = express.Router()

router.post("/", deleteProduct)

export default router