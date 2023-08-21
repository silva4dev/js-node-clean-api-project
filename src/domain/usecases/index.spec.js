const AuthUseCase = require('./auth-usecase')

describe('Index', () => {
  test('Should export dependencies', () => {
    const index = require('./')

    expect(index).toEqual({
      AuthUseCase
    })
  })
})
