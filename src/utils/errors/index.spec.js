const InvalidParamError = require('./invalid-param-error')
const MissingParamError = require('./missing-param-error')

describe('Index', () => {
  test('Should export dependencies', () => {
    const index = require('./')

    expect(index).toEqual({
      InvalidParamError,
      MissingParamError
    })
  })
})
