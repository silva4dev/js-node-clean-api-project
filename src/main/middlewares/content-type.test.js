const { app } = require('../config')
const request = require('supertest')

describe('Content-Type Middleware', () => {
  test('Should return json content type as default', async () => {
    app.get('/test_content_type', (request, response) => {
      response.send('')
    })

    await request(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })
})
