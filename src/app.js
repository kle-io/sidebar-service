const express = require('express');
const path = require('path');
const logger = require('morgan');
// const db = require('./models');
const router = require('./router');

const app = express();
app.use('/', express.static(path.resolve(__dirname, 'public')));
app.use('/:id', express.static(path.resolve(__dirname, 'public')));
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
/*
app.get('/api/sidebar/songs/:id', (req, res) => {
  db.track.findOne({
    where: { id: req.params.id || Math.floor(Math.random() * 105) },
    include: [{ all: true, nested: true }],
  }).then((data) => res.send(data));
});

app.get('/api/sidebar/users/:username', (req, res, next) => {
  db.user.findOne({
    where: { username: req.params.username },
  })
    .then((data) => res.send(data))
    .catch(next);
});

app.post('/api/sidebar/users/:username', (req, res, next) => {
  db.user.update(req.body, {
    where: { username: req.params.username },
  })
    .then((data) => { res.send(data); })
    .catch(next);
});
*/

module.exports = app;
