import express from 'express'
const router = express.Router()

//routes
import signup from './signup.js'
import signin from './signin.js'
import verifyToken from './verifyToken.js'  

//middleware

router.use('/signup', signup)
router.use('/signin', signin)
// router.use('/logout', logout)
router.use('/verifytoken', verifyToken)

export default router