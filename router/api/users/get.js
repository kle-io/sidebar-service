const db = require('../../../db/models');

const getUser = (req, res, next) => {
  db.user.findOne({
    where: { username: req.params.username },
  })
    .then((data) => res.send(data))
    .catch(next);
};

module.exports = getUser;
