const app = require('./app')
const setupApp = require('./setup')
const env = require('./env')

describe('Index', () => {
  test('Should export dependencies', () => {
    const index = require('./')

    expect(index).toEqual({
      app,
      setupApp,
      env
    })
  })
})
