const mongoose = require('mongoose');

const insuranceTypeSchema = new mongoose.Schema({
    insuranceName: {
        required: true,
        type: String
    },
    Amount: {
        required: true,
        type: String
    },
    InsuranceDetails: {
        required: true,
        type: {}
    }

})

module.exports = mongoose.model('insuranceTypes', insuranceTypeSchema)