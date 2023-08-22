const MongoHelper = require('../infra/helpers/mongo-helper')
const env = require('./config/env')
const app = require('./config/app')

jest.mock('../infra/helpers/mongo-helper')
jest.mock('./config/env')
jest.mock('./config/app')

describe('Index', () => {
  test('Should call app listen', async () => {
    const connect = jest.spyOn(MongoHelper, 'connect').mockResolvedValue()
    const listen = jest.spyOn(app, 'listen')

    await require('./index')

    expect(listen).toHaveBeenCalledTimes(1)
    expect(listen).toHaveBeenCalledWith(5858, expect.any(Function))
    expect(connect).toHaveBeenCalledWith(env.mongoUrl)
  })
})
