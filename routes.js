const express = require('express')
const router = express.Router()

const productRouter = require('./routers/product.router')
const categoryRouter = require('./routers/category.router')
const logRouter = require('./routers/log.router')

router.use('/products', productRouter)
router.use('/category', categoryRouter)
router.use('/logs', logRouter)

module.exports = router