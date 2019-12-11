const express = require('express');
const path = require('path');
const db = require('../db/models');

const app = express();
app.use('/', express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')));

app.all('*', (req, res, next) => {
  const origin = req.get('origin');
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/tracks/:id', (req, res) => {
  db.track.findOne({
    where: { id: req.params.id },
    include: [{ all: true, nested: true }],
  }).then((data) => res.send(data));
});

const PORT = 3005;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
