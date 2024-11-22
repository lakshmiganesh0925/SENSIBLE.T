

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('transaction_db', 'root', 'GaneshReddy', {
    host: 'localhost',
    dialect: 'mysql', // Use MySQL database
});

sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
