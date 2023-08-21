const MongoHelper = require('./mongo-helper')

describe('Index', () => {
  test('Should export dependencies', () => {
    const index = require('./')

    expect(index).toEqual({
      MongoHelper
    })
  })
})
