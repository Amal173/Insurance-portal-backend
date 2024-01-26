const insurance = require('../model/insuranceModel')


const getInsuranceData = async (pipeline) => {

    return await insurance.aggregate(pipeline);
}


const createInsuranceData = async (updateData) => {

    return await insurance.create(updateData)
}


const updateInsuranceData = async ({ id, status }) => {

    return await insurance.findByIdAndUpdate({ _id: id }, { $set: { status: status } });
}

module.exports = { getInsuranceData, createInsuranceData, updateInsuranceData }