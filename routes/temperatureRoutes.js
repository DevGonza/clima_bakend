const express = require('express')
const router = express.Router()
const {middleware} = require('./middleware')
const temperatureController = require('../controllers/temperatureController')
const { Router } = require('express')

router.get("/", temperatureController.allTemperatureController)
router.get("/:id_city/:friday", temperatureController.cityIdTemperatureController)
router.put("/:city", temperatureController.dayTemperatureController)



module.exports = router