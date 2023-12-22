const express = require('express')
const router = express.Router()
const customerController = require('../controllers/customerController')


router.get('/register',customerController.test)




module.exports = router

