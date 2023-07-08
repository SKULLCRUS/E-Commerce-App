import express from "express"
import getProductsByName from "../controllers/product/getProductsByName.js"

const router = express.Router()

router.get("/", getProductsByName)

export default router