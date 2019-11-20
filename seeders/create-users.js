const User = require('../models/user')

const users = [
  { 
    firstName: 'Brock',
    lastName: 'Samson',
    userName: 'FrankenMullet',
    role: 'user' 
  },
  { 
    firstName: 'Sergeant',
    lastName: 'Hatred',
    userName: 'UncleHatred',
    role: 'user' 
  }
]

module.exports = async function() {
  users.forEach(async userAttr => {
    let newUser = await User.create(userAttr)
  })
}