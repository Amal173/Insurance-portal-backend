const express = require('express');
require('dotenv').config();
const {connectDb}=require('./config/DbConnection')
const insuranceRoute=require('./router/insuranceRouter')
const insuranceTypeRoute=require('./router/insuranceTypeRouter')
const cors=require('cors')
const bodyParser = require('body-parser')
const app = express();
const port=process.env.PORT
connectDb();
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/insurance',insuranceRoute)
app.use('/insuranceType',insuranceTypeRoute)
app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})