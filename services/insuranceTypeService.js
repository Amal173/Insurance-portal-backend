const insuranceType = require('../model/insuranceTypeModel')


const getInsuranceTypeData = async () => {

    return await insuranceType.find()

}

const createInsuranceTypeData = async ({ InsuranceDetails, insuranceName, Amount }) => {

    return await insuranceType.create({ InsuranceDetails, insuranceName, Amount })

}


module.exports = { getInsuranceTypeData, createInsuranceTypeData }