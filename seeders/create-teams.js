const Team = require('../models/team')

const teams = [
  {
    status: 'Off-Duty',
    completion: 0,
    timeRemaining: 0,
    location: 'Motorpool'
  },
  {
    status: 'Active Cleanup',
    completion: 96,
    timeRemaining: 3600,
    location: 'I-95 Mile 37'
  },
  {
    status: 'En-route to Disposal Site',
    completion: 12,
    timeRemaining: 2400,
    location: 'I-5 Mile 126'
  },
]

module.exports = async function() {
  teams.forEach(async team => {
    let newTeam = await Team.create(team)
  })
}