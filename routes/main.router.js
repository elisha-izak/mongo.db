const express = require('express');
const router = express.Router();

const userRouter = require('./user.router')
const orderRouter = require('./order.router')
const productRouter = require('./product.router')


router.use('/user',userRouter)
router.use('/order',orderRouter)
router.use('/product',productRouter)




module.exports = router;