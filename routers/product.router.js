const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')

router.get('/', productController.list)
router.post('/',  productController.create)
router.put('/', productController.upsert)
router.delete('/', productController.archive)

module.exports =router