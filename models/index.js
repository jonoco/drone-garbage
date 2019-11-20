const { Sequelize } = require('sequelize')

//const DATABASE_URI = process.env.DATABASE_URI 
const DATABASE_URI = 'postgres://bcxpvcpyxbxshl:67ce7532c2567939ecfc30da51b532f017e1519634299dbca9acf03c71854717@ec2-174-129-222-15.compute-1.amazonaws.com:5432/d3hou57llpgth'

const sequelize = new Sequelize(DATABASE_URI, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: true
  }
});

module.exports = sequelize