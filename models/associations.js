/*
  Import models
 */
const User = require('./user')
const Drone = require('./drone')
const Location = require('./location')
const Schedule = require('./schedule')
const Team = require('./team')
const Role = require('./role')


/*
  Declare associations
 */
Team.hasMany(Drone)
Team.hasOne(Schedule)

Schedule.hasMany(Location)

User.hasMany(Role)
