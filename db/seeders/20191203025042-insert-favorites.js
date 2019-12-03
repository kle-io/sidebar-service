const { favorites } = require('../sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('favorites', favorites, {}),
  down: (queryInterface) => queryInterface.bulkDelete('favorites', favorites, {}),
};
