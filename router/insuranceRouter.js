const express = require('express')
const router = express.Router();
const { createInsurance, getInsurance, UpdateInsurance } = require('../controller/insurance')

router.route('/').get(getInsurance)
router.route('/').post(createInsurance)
router.route('/:id').put(UpdateInsurance)

module.exports = router 