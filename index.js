const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const transactionRoutes = require('./routes/transactionRoutes');
const User = require('./models/User');
const Transaction = require('./models/Transaction');


const app = express();
app.use(bodyParser.json());

app.use('/api', transactionRoutes);



const PORT =5555;

app.listen(5555, () => {
    console.log('Server running on http://localhost:5555');
});