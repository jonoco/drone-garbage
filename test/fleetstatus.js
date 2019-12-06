const request = require('supertest')
const app = require('../app')

describe('testing fleet status', function() {
    let server;

    beforeEach(function() {
        server = app.listen(process.env.PORT || 3000)
    })

    afterEach(function(done) {
        server.close(done)
    })

    it('responds to /fleetstatus', function(done) {
        request(server)
            .get('/fleetstatus')
            .expect(200, done)
    })
})