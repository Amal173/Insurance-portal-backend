const insuranceTypeRoute = require('./router/insuranceTypeRouter')
const insuranceRoute = require('./router/insuranceRouter')
const { connectDb } = require('./config/DbConnection')
const bodyParser = require('body-parser')
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const port = process.env.PORT
const app = express();

connectDb();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/insurance', insuranceRoute)
app.use('/insuranceType', insuranceTypeRoute)


app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})