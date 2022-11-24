const express = require('express')
const router = express.Router()
const fileUploader = require('../../config/cloudinary')
const cartController = require('./cartController')

router.get('/getAll', cartController.list)
router.post('/add', cartController.add)


module.exports = router