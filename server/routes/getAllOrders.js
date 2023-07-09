import express from "express"
import getAllOrders from "../controllers/admin/getOrders.js"

const router = express.Router()

router.get("/", getAllOrders)

export default router