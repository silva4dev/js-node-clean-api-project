const ServerError = require('./server-error')
const UnauthorizedError = require('./unauthorized-error')

describe('Index', () => {
  test('Should export dependencies', () => {
    const index = require('./')

    expect(index).toEqual({
      ServerError,
      UnauthorizedError
    })
  })
})
