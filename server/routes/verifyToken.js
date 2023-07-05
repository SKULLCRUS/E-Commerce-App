import express from 'express'
import verifyToken from '../controllers/auth/verifyToken.js'

const router = express.Router()

router.post('/', verifyToken)

export default router