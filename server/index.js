const express = require('express');
const path = require('path');
const db = require('../db/models');

const app = express();
app.use('/', express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.json());

app.get('/api/tracks/:id', (req, res) => {
  db.playlist.findOne({
    where: { id: req.params.id },
    include: [{ model: db.track, through: db.playlistTrack }],
  })
    .then((track) => res.json(track));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
