const request = require('supertest')
const app = require('../app')

describe('testing schedule', function() {
    let server;

    beforeEach(function() {
        server = app.listen(process.env.PORT || 3000)
    })

    afterEach(function(done) {
        server.close(done)
    })

    it('responds to /schedule', function(done) {
        request(server)
            .get('/schedule')
            .expect(200, done)
    })
})