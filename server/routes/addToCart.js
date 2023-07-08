import express from "express"
import addToCart from "../controllers/user/addToCart.js"

const router = express.Router()

router.post("/", addToCart)

export default router