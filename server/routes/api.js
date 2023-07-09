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
import getProductsByName from './getProductsByName.js'  
import rateProduct from './rateProduct.js'  
import dealOfTheDay from './dealOfTheDay.js'  
import addToCart from './addToCart.js'  
import removeFromCart from './removeFromCart.js'  
import addAddress from './addAddress.js'  
import orderProduct from './orderProduct.js'  
import userOrders from './userOrders.js'  
import getAllOrders from './getAllOrders.js'  
import changeOrderStatus from './changeOrderStatus.js'  
import analytics from './adminAnalytics.js'  

//middleware

router.use('/signup', signup)
router.use('/signin', signin)
// router.use('/logout', logout)
router.use('/verifytoken', verifyToken)

//*auth is protected route for getting user data
router.use('/user',auth,getUser)
router.use('/products',auth,getProductByCategory)
router.use('/products/search',auth,getProductsByName)
router.use('/rate-product',auth,rateProduct)
router.use('/deal-of-day',auth,dealOfTheDay)
router.use('/add-to-cart',auth,addToCart)
router.use('/remove-from-cart',auth,removeFromCart)
router.use('/save-user-address',auth,addAddress)
router.use('/order',auth,orderProduct)
router.use('/orders/me',auth,userOrders)
//?Admin related routes
router.use('/admin/add-product',admin,addProduct)
router.use('/admin/get-products',admin,getAllProducts)
router.use('/admin/delete-product',admin,deleteProduct)
router.use('/admin/get-orders',admin,getAllOrders)
router.use('/admin/change-order-status',admin,changeOrderStatus)
router.use('/admin/analytics',admin,analytics)

export default router