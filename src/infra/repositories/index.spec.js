const LoadUserByEmailRepository = require('./load-user-by-email-repository')
const UpdateAccessTokenRepository = require('./update-access-token-repository')

describe('Index', () => {
  test('Should export dependencies', () => {
    const index = require('./')

    expect(index).toEqual({
      LoadUserByEmailRepository,
      UpdateAccessTokenRepository
    })
  })
})
