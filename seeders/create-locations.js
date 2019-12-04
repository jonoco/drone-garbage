const Location = require('../models/location')

const locations = [
  {
    description: 'Washington St',
    dateScheduled: new Date('July 19 2020'),
    team: 3,
    long: 118.05,
    lat: 34.35,
    priority: 'low',
    complete: false,
    surveyComplete: false,
    itemsSurveyed: 0,
    itemsCollected: 0
  },
  {
    description: 'Wilshire Blvd',
    dateScheduled: new Date('August 7 2020'),
    team: 1,
    long: 118.05,
    lat: 34.35,
    priority: 'low',
    complete: false,
    surveyComplete: false,
    itemsSurveyed: 0,
    itemsCollected: 0
  },
  {
    description: 'Sunset Blvd',
    dateScheduled: new Date('September 22 2020'),
    team: 4,
    long: 118.05,
    lat: 34.35,
    priority: 'high',
    complete: false,
    surveyComplete: false,
    itemsSurveyed: 0,
    itemsCollected: 0
  }
]

module.exports = function() {
  locations.forEach(location => {
    Location.create(location)
  })
}