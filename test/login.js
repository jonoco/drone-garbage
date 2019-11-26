const request = require('supertest')
const app = require('../app')

describe('testing log in', function() {
    let server;

    beforeEach(function() {
        server = app.listen(process.env.PORT || 3000)
    })

    afterEach(function(done) {
        server.close(done)
    })

    it('respond to /login', function(done) {
        request(server)
            .get('/login')
            .expect(200, done)
    })

    it('returns error without username', function(done) {
        request(server)
            .post('/login')
            .send({ password: 'test' })
            .expect(400, done)
    })

    it('returns error without password', function(done) {
        request(server)
            .post('/login')
            .send({ username: 'test' })
            .expect(400,done)
    })

    it('responds to valid username and password', function(done) {
        request(server)
            .post('/login')
            .send({  username: 'test', password: 'test' })
            .expect(302, done)
    })

    it('returns error with incorrect password', function(done) {
        request(server)
            .post('/login')
            .send( {username: 'test', password: 'notthepassword' })
            .expect(400, done)
    })
})