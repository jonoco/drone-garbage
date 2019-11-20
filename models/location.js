const { Sequelize, Model } = require('sequelize')
const sequelize = require('./index')

module.exports = sequelize.define('location', {
  description: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'No description.'
  },
  long: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  lat: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  priority: {
    type: Sequelize.ENUM('low', 'medium', 'high'),
    allowNull: false
  },
  complete: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  surveyComplete: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  itemsSurveyed: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  itemsCollected: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
})
