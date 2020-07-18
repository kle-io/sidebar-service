const express = require('express');
const path = require('path');
const logger = require('morgan');
const router = require('./router');

const app = express();
app.use('/', express.static(path.resolve(__dirname, 'client', 'public')));
app.use('/:id', express.static(path.resolve(__dirname, 'client', 'public')));
app.use(express.json());
app.use(logger('tiny'));

app.all('*', (req, res, next) => {
  const origin = req.get('origin');
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(router);

module.exports = app;
