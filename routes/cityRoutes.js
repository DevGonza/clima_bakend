const express = require('express')
const router = express.Router()
const {middleware} = require('./middleware')
const cityController = require('../controllers/cityController')
const { Router } = require('express')

router.get("/", cityController.allCityController)
router.get("/:city", cityController.allCityIdController)
router.put("/:city",cityController.editCityController )



module.exports = router