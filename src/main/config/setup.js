const { cors } = require('../middlewares')

module.exports = app => {
  app.disable('x-powered-by')
  app.use(cors)
}
