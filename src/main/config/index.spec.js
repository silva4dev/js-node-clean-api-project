const app = require('./app')
const setupApp = require('./setup')

describe('Index', () => {
  test('Should export dependencies', () => {
    const index = require('./')

    expect(index).toEqual({
      app,
      setupApp
    })
  })
})
