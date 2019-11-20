const { Model, DataTypes } = require('sequelize')
const sequelize = require('./index')

module.exports = sequelize.define('role', {
  name: {
    type: DataTypes.ENUM('user', 'supervisor'),
    allowNull: false
  }
})