const request = require('supertest')
const app = require('../app')

describe('loading server', function() {
    let server;

    beforeEach(function() {
        server = app.listen(process.env.PORT || 3000)
    })

    afterEach(function(done) {
        server.close(done)
    })

    it('responds to /', function(done) {
        request(server)
            .get('/')
            .expect(200, done)
    })

    it('responds with an error to invalid routes', function(done) {
        request(server)
            .get('/404')
            .expect(404, done)
    })

})