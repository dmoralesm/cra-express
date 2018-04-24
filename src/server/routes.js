const routes = require('express').Router();

routes.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

module.exports = routes;
