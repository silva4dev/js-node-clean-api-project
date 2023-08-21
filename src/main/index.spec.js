describe('Index', () => {
  test('Should call app listen', () => {
    jest.mock('./config/app', () => ({
      listen: jest.fn()
    }))

    const mock = require('./config/app')

    const listen = jest.spyOn(mock, 'listen')
    require('./index')

    expect(listen).toHaveBeenCalledTimes(1)
  })
})
