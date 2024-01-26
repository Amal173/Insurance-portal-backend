const express = require('express')
const router = express.Router();
const { getInsuranceType, createInsuranceType } = require('../controller/insuranceTypes')

router.route('/').get(getInsuranceType)
router.route('/').post(createInsuranceType)

module.exports = router;