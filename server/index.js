const express = require('express');
const path = require('path');
const db = require('../db/models');

const app = express();
app.use('/', express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());

app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/api/tracks/:id', (req, res) => {
  db.track.findOne({
    where: { id: req.params.id },
    include: [{ all: true }],
  }).then((data) => res.send(data));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
