const insurance = require('../model/insuranceModel')

const createInsurance = async (req, res) => {
    try {

        console.log(req.body);
        const { Salutation, Name, Email, Gender, dob, age, Address, Qualifications, Profession, Nominee, RelationshipwithNominee, InsuranceType, phone } = req.body

        if (!Salutation || !Name || !Email || !Gender || !dob || !age || !Address || !Qualifications || !Profession || !Nominee || !RelationshipwithNominee || !InsuranceType || !phone) {
            return res.status(400).json({ error: "all fields are mandatory" })
        }
        const insurances = await insurance.create({ ...req.body })

        res.status(201).json({ insurances })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getInsurance = async (req, res) => {
    try {
        const insuranceTypes = await insurance.find()
        if (!insuranceTypes) {
            return res.status(404).json({ error: "not found" })
        }
        res.status(200).json({ insuranceTypes })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}



module.exports = { getInsurance, createInsurance }