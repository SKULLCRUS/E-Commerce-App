import express from "express"
import userOrders from "../controllers/user/userOrder.js"

const router = express.Router()

router.get("/", userOrders)

export default router