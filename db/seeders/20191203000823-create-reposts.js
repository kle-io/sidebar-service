const { reposts } = require('../sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('shares', [reposts[0], reposts[1], reposts[2], reposts[3], reposts[4]], {}),
  down: (queryInterface) => queryInterface.bulkDelete('shares', reposts, {}),
};
