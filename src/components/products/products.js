const express = require('express')
const router = express.Router()
const fileUploader = require('../../config/cloudinary')
const productController = require('./productController')

router.get('/getAll', productController.list)
//router.post('/add', fileUploader.any('file'), productController.createProduct)
//router.get('/:slug', productController.show)
router.post('/add', productController.add)

module.exports = router