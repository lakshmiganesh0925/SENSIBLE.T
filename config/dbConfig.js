

const { Sequelize } = require('sequelize');

// Using environment variables for database connection
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      require: true, // Ensure SSL is enabled if using Render's MySQL
      rejectUnauthorized: false, // Disable unauthorized SSL certificates
    },
  },
});




sequelize.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err));

module.exports = sequelize;
