

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://user:password@localhost:3306/transaction_db', { dialect: 'mysql' });


sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
