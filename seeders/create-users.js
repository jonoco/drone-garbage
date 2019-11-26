const User = require('../models/user')

const users = [
  { 
    firstName: 'Brock',
    lastName: 'Samson',
    username: 'FrankenMullet',
    password: 'pass'
    role: 'user' 
  },
  { 
    firstName: 'Sergeant',
    lastName: 'Hatred',
    username: 'UncleHatred',
    password: 'pass'
    role: 'user' 
  },
  { 
    firstName: 'test',
    lastName: 'test',
    username: 'test',
    password: 'test'
    role: 'user' 
  }
]

module.exports = async function() {
  users.forEach(async userAttr => {
    let newUser = await User.create(userAttr)
  })
}