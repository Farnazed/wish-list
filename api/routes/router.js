const healthCheckRouter = require('./health-check');
module.exports = (app) => {
  app.use('/healthcheck', healthCheckRouter);
};
