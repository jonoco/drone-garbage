/*
  Import models
 */
const User = require('./user')
const Drone = require('./drone')
const Location = require('./location')
const Schedule = require('./schedule')
const Team = require('./team')


/*
  Declare associations
 */
Team.hasMany(Drone)
Team.hasOne(Schedule)

Schedule.hasMany(Location)

// User.belongsToMany(Role, {through: 'UserRole'})
// Role.belongsToMany(User, {through: 'UserRole'})
