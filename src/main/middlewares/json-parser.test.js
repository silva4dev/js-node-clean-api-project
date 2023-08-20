const { app } = require('../config')
const request = require('supertest')

describe('JSON Parser Middleware', () => {
  test('Should parse body as JSON', async () => {
    app.post('/test_json_parser', (request, response) => {
      response.send(request.body)
    })

    await request(app)
      .post('/test_json_parser')
      .send({ name: 'hello' })
      .expect({ name: 'hello' })
  })
})
