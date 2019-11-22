const { DataTypes } = require('sequelize')
const sequelize = require('./index')

module.exports = sequelize.define('drone', {
  status: {
    type: DataTypes.ENUM('ok', 'error', 'warning'),
    allowNull: false
  },
  battery: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      max: 100,
      min: 0
    }
  }
})