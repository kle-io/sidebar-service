const { Op } = require('sequelize');
const db = require('../../../models');

const getSong = (req, res) => db.track
  .findOne({
    where: { id: req.params.id || Math.floor(Math.random() * 105) },
    include: [
      { all: true, nested: true },
    ],
  })
  .then((track) => db.track
    .findAll({
      where: { genreId: track.genre.id, id: { [Op.not]: track.id } },
      attributes: [
        'id',
        'title',
        'songUrl',
        'cover',
        'likes',
        'comments',
        'reposts',
        'plays'
      ],
      include: { model: db.user },
      limit: 3,
    })
    .then((relatedTracks) => res.send({ track, relatedTracks })));

module.exports = getSong;
