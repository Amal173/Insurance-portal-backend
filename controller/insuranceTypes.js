const { getInsuranceTypeData, createInsuranceTypeData } = require('../services/insuranceTypeService')


const getInsuranceType = async (req, res) => {
    try {

        const insuranceTypes = await getInsuranceTypeData()

        if (!insuranceTypes) {

            return res.status(404).json({ error: "not found" })
        }

        res.status(200).json({ insuranceTypes })
    } catch (error) {

        res.status(500).json({ error: error.message })
    }
}


const createInsuranceType = async (req, res) => {
    try {
        const { insuranceName, Amount, InsuranceDetails } = req.body

        if (!insuranceName || !Amount || !InsuranceDetails) {
            return res.status(500).json({ error: "all field are mandatory" })
        }

        const details = InsuranceDetails.map((data) => data)

        const insuranceTypes = await createInsuranceTypeData({ InsuranceDetails: details, insuranceName, Amount })

        res.status(201).json({ insuranceTypes })
    } catch (error) {

        res.status(500).json({ error: error.message })
    }
}

module.exports = { getInsuranceType, createInsuranceType }