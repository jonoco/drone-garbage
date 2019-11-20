const { Sequelize, Model } = require('Sequelize')
const sequelize = require('./index')

module.exports = sequelize.define('drone', {
  status: {
    type: Sequelize.ENUM('ok', 'error', 'warning'),
    allowNull: false
  },
  battery: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      max: 100,
      min: 0
    }
  }
})