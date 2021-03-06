const request = require('supertest')
const fs = require('fs')
const app = require('../app')

describe('testing profile page', function() {
    let server;

    beforeEach(function() {
        server = app.listen(process.env.PORT || 3000)
    })

    afterEach(function(done) {
        server.close(done)
    })

    it('responds unauthenticated to /profile', function(done) {
        request(server)
            .get('/profile')
            .expect(302, done)
    })

    it('responds authenticated to /profile', function(done) {
        request(server)
            .post('/login')
            .send({username: 'test', password: 'test'})
            .expect(302)

        request(server)
            .get('/profile')
            .expect(302, done)
    })

    it('accepts new bio', function(done) {
        this.timeout(5000)

        request(server)
            .post('/login')
            .send({username: 'test', password: 'test'})
            .expect(302)

        request(server)
            .post('/profile/bio/test')
            .send({ btn: 'submitBio', userBio: 'some bio' })
            .expect(302, done)
            
    })

    it('accepts new image', function(done) {
        request(server)
            .post('/login')
            .send({username: 'test', password: 'test'})
            .expect(302)
    
        request(server)
            .post('/profile/image/test')
            .field('field', 'somefield')
            .attach('image', __dirname + '/../public/images/profile.jpg')
            .expect(302, done)
    
    })
})