const { getInsuranceData, createInsuranceData, updateInsuranceData } = require('../services/insuranceService')


const createInsurance = async (req, res) => {
    try {
        const { Salutation, Name, Email, Gender, dob, Address, Qualifications, Profession, Nominee, RelationshipwithNominee, InsuranceType, phone } = req.body
        if (!Salutation || !Name || !Email || !Gender || !dob || !Address || !Qualifications || !Profession || !Nominee || !RelationshipwithNominee || !InsuranceType || !phone) {
            return res.status(400).json({ error: "all fields are mandatory" })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(Email)) {
            return res.status(400).json({ error: "Invalid email format" });
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ error: "Invalid phone number format" });
        }


        const age = await calculateAge(dob);

        const updateData = { Salutation, Name, Email, Gender, dob, Address, Qualifications, Profession, Nominee, RelationshipwithNominee, InsuranceType, phone, age }

        const insurances = await createInsuranceData(updateData)

        res.status(201).json({ insurances })
    } catch (error) {

        res.status(500).json({ error: error.message })
    }
}



const UpdateInsurance = async (req, res) => {
    try {

        const { id } = req.params
        const { status } = req.body
        const insurances = await updateInsuranceData({ id, status })

        res.status(201).json({ insurances })
    } catch (error) {

        res.status(500).json({ error: error.message })
    }
}



const getInsurance = async (req, res) => {
    try {

        const search = req.query.search
        const pipeline = [{ $match: {} }]

        if (search) {
            pipeline.push({
                $match: {
                    $or: [
                        { Name: { $regex: search, $options: 'i' } },
                        { Email: { $regex: search, $options: 'i' } },

                    ]
                }
            });
        }

        const insurances = await getInsuranceData(pipeline)

        if (!insurances) {
            return res.status(404).json({ error: "not found" })
        }

        res.status(200).json({ insurances })
    } catch (error) {

        res.status(500).json({ error: error.message })
    }
}



function calculateAge(dateOfBirth) {

    const dob = new Date(dateOfBirth);

    const currentDate = new Date();

    const timeDiff = currentDate - dob;

    const age = Math.floor(timeDiff / (365.25 * 24 * 60 * 60 * 1000))

    return age;
}


module.exports = { getInsurance, createInsurance, UpdateInsurance }