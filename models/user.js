const { Sequelize, Model } = require('sequelize')
const sequelize = require('./index')

class User extends Model {}
User.init({
  firstName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  role: {
    type: Sequelize.ENUM('user', 'supervisor'),
    allowNull: false,
    defaultValue: 'user'
  }
}, { 
  sequelize,
  modelName: 'user' 
})

module.exports = User
