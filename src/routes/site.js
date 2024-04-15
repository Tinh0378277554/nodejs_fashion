const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

router.get('/dangky', siteController.dangky)
router.get('/', siteController.home)

module.exports = router;