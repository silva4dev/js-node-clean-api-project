const EmailValidator = require('./email-validator')
const Encrypter = require('./encrypter')
const TokenGenerator = require('./token-generator')

describe('Index', () => {
  test('Should export dependencies', () => {
    const index = require('./')

    expect(index).toEqual({
      EmailValidator,
      Encrypter,
      TokenGenerator
    })
  })
})
