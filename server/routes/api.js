import express from 'express'
const router = express.Router()

//routes
import signup from './signup.js'
import signin from './signin.js'
import verifyToken from './verifyToken.js'  
import getUser from './getUser.js'  
import auth from '../middlewares/auth.js'  

//middleware

router.use('/signup', signup)
router.use('/signin', signin)
// router.use('/logout', logout)
router.use('/verifytoken', verifyToken)

//*auth is protected route for getting user data
router.use('/user',auth,getUser)

export default router