const mongoose = require('mongoose');

const insuranceSchema = new mongoose.Schema({
    Salutation: {
        required: true,
        type: String
    },
    Name: {
        required: true,
        type: String
    },
    Email: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    },
    Gender: {
        required: true,
        type: String
    },
    dob: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: String
    },
    Address: {
        required: true,
        type: String
    },
    Qualifications: {
        required: true,
        type: String
    },
    Profession: {
        required: true,
        type: String
    },
    Nominee: {
        required: true,
        type: String
    },
    RelationshipwithNominee: {
        required: true,
        type: String
    },
    InsuranceType: {
        required: true,
        type: String
    },

})

module.exports = mongoose.model('insurance', insuranceSchema)