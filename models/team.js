const { DataTypes } = require('sequelize')
const sequelize = require('./index')

module.exports = sequelize.define('team', {
  status: {
    type: DataTypes.ENUM('Off-Duty', 'En-route to Cleanup Site', 'En-route to Disposal Site', 'Active Cleanup', 'Paused', "Returning", "Out for Maintanence", "Not Responding"),
    allowNull: false,
    defaultValue: 'Off-Duty'
  },
  completion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
  },
  timeRemaining: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
  },
  location: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Motorpool'
  }
})