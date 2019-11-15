const request = require('supertest');
const server = require('../api/server.js');

describe('auth-router.js', () => {

    describe('POST /register',() =>{
        it('should return status 200', () => {
      let user = {"username": "millare", "password": "password123"};
      return request(server)
      .post('/api/register')
      .send(user)
      .then(res => {
        expect(res.status).toBe(200);
      })
      .catch(err => {
        console.log(err)
      })
    })
    it('should error if no user info is given', () => {
      let user = {};
      return request(server)
      .post('/api/register')
      .send(user)
      .then(res => {
        expect(res.status).toBe(404);
      })
    })
  })
})
