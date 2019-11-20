const { Sequelize, Model } = require('sequelize')
const sequelize = require('./index')

module.exports = sequelize.define('team', {
  status: {
    type: Sequelize.ENUM('ok', 'error', 'warning'),
    allowNull: false
  }
})