const express = require('express')
const router = express.Router()
//const sellerRoute = require('./routes/sellerRoutes')
const buyerRoute = require('./routes/buyerRoutes')
const adminRoute = require('./routes/adminRoutes')

router.use('/api/v1/admin/',adminRoute)
//router.use('/api/v1/seller/',sellerRoute)
router.use('/api/v1/buyer/',buyerRoute)

module.exports = router