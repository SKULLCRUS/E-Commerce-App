import express from 'express'
const router = express.Router()

//routes
import signup from './signup.js'
import signin from './signin.js'
import verifyToken from './verifyToken.js'  
import getUser from './getUser.js'  
import auth from '../middlewares/auth.js'  
import admin from '../middlewares/admin.js'  
import addProduct from './addProduct.js'  
import getAllProducts from './getAllProducts.js'  
import deleteProduct from './deleteProductById.js'  
import getProductByCategory from './getProductsByCat.js'  

//middleware

router.use('/signup', signup)
router.use('/signin', signin)
// router.use('/logout', logout)
router.use('/verifytoken', verifyToken)

//*auth is protected route for getting user data
router.use('/user',auth,getUser)
router.use('/products',auth,getProductByCategory)
//?Admin related routes
router.use('/admin/add-product',admin,addProduct)
router.use('/admin/get-products',admin,getAllProducts)
router.use('/admin/delete-product',admin,deleteProduct)

export default router