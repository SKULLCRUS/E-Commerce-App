import express from "express"
import analytics from "../controllers/admin/analytics.js"

const router = express.Router()

router.get("/", analytics)

export default router