import express from "express"
import orderProduct from "../controllers/user/orderProduct.js"

const router = express.Router()

router.post("/", orderProduct)

export default router