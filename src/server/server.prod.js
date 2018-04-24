const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const port = 5000;

app.use(express.static(path.join(__dirname, '../../build')));

app.use('/', routes);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
