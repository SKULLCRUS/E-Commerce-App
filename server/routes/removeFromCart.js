import express from "express"
import removeFromCart from "../controllers/user/removeFromCart.js"

const router = express.Router()

router.delete("/", removeFromCart)

export default router