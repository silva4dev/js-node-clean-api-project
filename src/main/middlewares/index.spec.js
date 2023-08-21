const cors = require('./cors')
const jsonParser = require('./json-parser')
const contentType = require('./content-type')

describe('Index', () => {
  test('Should export dependencies', () => {
    const index = require('./')

    expect(index).toEqual({
      cors,
      jsonParser,
      contentType
    })
  })
})
