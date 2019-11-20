const Sequelize = require('sequelize')

const DATABASE_URI = process.env.DATABASE_URI
const sequelize = new Sequelize(DATABASE_URI, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

module.exports = sequelize