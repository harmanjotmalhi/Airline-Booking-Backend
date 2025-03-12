const express = require('express');

const { CityController } = require('../../controllers');

const { CityMiddleware } = require('../../middlewares');

const router = express.Router();

// /api/v1/airplanes POST request
router.post('/', CityMiddleware.validateCreateRequest, CityController.createCity);


module.exports = router;