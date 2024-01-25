const express=require('express')
const router = express.Router();
const {createInsurance,getInsurance}=require('../controller/insurance')
router.route('/').get(getInsurance)
router.route('/').post(createInsurance)

module.exports=router;