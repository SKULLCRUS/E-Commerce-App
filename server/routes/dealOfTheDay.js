import express from "express"
import dealOfTheDay from "../controllers/product/dealOfTheDay.js"

const router = express.Router()

router.get("/", dealOfTheDay)

export default router