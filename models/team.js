const { DataTypes } = require('sequelize')
const sequelize = require('./index')

module.exports = sequelize.define('team', {
  status: {
    type: DataTypes.ENUM('ok', 'error', 'warning'),
    allowNull: false
  }
})