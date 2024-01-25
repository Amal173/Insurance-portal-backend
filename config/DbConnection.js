const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "Database Connected",
        );
    } catch (err) {
        console.log(err);
        // process.exit(1);
    }
};


module.exports = { connectDb };