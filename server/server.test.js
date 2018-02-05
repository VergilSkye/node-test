const app = require('./server').app;
const request = require('supertest');
const expect = require('expect');

describe('Server', () => {
    describe('GET /', () => {
        it('should return Hello Wolrd', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found.'
                    });
                })
                .end(done);
        });
    })
    describe('GET /users', () => {
        it('should return my user object', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Vergil',
                        age: 24
                    })
                })
                .end(done);
        });
    });
});