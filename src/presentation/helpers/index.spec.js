const HttpResponse = require('./http-response')

describe('Index', () => {
  test('Should export dependencies', () => {
    const index = require('./')

    expect(index).toEqual({
      HttpResponse
    })
  })
})
