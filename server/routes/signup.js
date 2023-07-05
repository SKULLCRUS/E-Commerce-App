import express from 'express'
import signup from "../controllers/auth/signup.js"

const router = express.Router()

router.post('/', signup)

export default router