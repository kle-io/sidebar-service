const db = require('../../../models');

const updateUserFollowers = (req, res, next) => {
  db.user.update(req.body, {
    where: { username: req.params.username },
  })
    .then((data) => { res.send(data); })
    .catch(next);
};

module.exports = updateUserFollowers;
