const LoginRouter = require('./login-router')

describe('Index', () => {
  test('Should export dependencies', () => {
    const index = require('./')

    expect(index).toEqual({
      LoginRouter
    })
  })
})
