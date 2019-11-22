const { DataTypes } = require('sequelize')
const sequelize = require('./index')

module.exports = sequelize.define('location', {
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: 'No description.'
  },
  long: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  lat: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  priority: {
    type: DataTypes.ENUM('low', 'medium', 'high'),
    allowNull: false
  },
  complete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  surveyComplete: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  itemsSurveyed: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  itemsCollected: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})
