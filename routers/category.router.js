const express = require('express')
const router = express.Router()
const categoryController = require('../controllers/category.controller')

router.get('/', categoryController.list)
router.put('/', categoryController.upsert)
router.post('/', categoryController.create)
router.delete('/', categoryController.archive)

module.exports =router