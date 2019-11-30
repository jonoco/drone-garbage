const request = require('supertest')
const app = require('../app')

describe('testing signup page', function() {
    let server;

    beforeEach(function() {
        server = app.listen(process.env.PORT || 3000)
    })

    afterEach(function(done) {
        server.close(done)
    })

    it('responds to /signup', function(done) {
        request(server)
            .get('/signup')
            .expect(200, done)
    })

    it('redirect after signing up', function(done) {
        const username = `test${Math.floor(Math.random()*100000)}`

        request(server)
            .post('/signup')
            .send({ username: username, password: 'test', passrepeat: 'test' })
            .expect(302, done)
    })

    it('respond with error to existing user', function(done) {
        request(server)
            .post('/signup')
            .send({ username: 'test', password: 'test', passrepeat: 'test' })
            .expect(400, done)
    })
})