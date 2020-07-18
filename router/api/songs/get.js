const db = require('../../../models');

const getSong = (req, res) => {
  db.track.findOne({
    where: { id: req.params.id || Math.floor(Math.random() * 105) },
    include: [{ all: true, nested: true }],
  }).then((data) => res.send(data));
};

module.exports = getSong;
