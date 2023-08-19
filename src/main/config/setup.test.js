const app = require('./app')
const request = require('supertest')

describe('App Setup', () => {
  test('Should disable x-powered-by header', async () => {
    app.get('/test_x_powered_by', (request, response) => {
      response.send('')
    })

    const response = await request(app).get('/test_x_powered_by')

    expect(response.headers['x-powered-by']).toBeUndefined()
  })
})
