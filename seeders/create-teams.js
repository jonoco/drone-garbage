const Team = require('../models/team')

const teams = [
  {
    id: 1,
    status: 0,
    completion: 0,
    timeRemaining: 0,
    location: 'Motorpool'
  },
  {
    id: 2,
    status: 1,
    completion: 96,
    timeRemaining: 3600,
    location: 'I-95 Mile 37'
  },
  {
    id: 3,
    status: 3,
    completion: 12,
    timeRemaining: 2400,
    location: 'I-5 Mile 126'
  },
]

module.exports = function() {
  teams.forEach(team => {
    Team.create(team)
  })
}