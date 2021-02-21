const request = require('supertest')
const app = require('../src/app')

describe('Successful Connection', () => {
    it('should just have response of OK!', () => {
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                if (err) throw err
            })
    })
})
