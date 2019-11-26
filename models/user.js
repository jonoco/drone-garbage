const { DataTypes } = require('sequelize')
const sequelize = require('./index')

module.exports = sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('user', 'supervisor'),
    allowNull: false,
    defaultValue: 'user'
  },
  bio: {
      type: DataTypes.TEXT,
      allowNull:true,
      defaultValue: 'Enter bio info here'
  },
  city: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Corvallis'
  }
})
