import express from "express"
import changeOrderStatus from "../controllers/admin/changeOrderStatus.js"

const router = express.Router()

router.post("/", changeOrderStatus)

export default router