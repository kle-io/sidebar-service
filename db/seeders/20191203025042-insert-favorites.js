const { favorites } = require('../sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('favorites', [favorites[0], favorites[1], favorites[2], favorites[3]], {}),
  down: (queryInterface) => queryInterface.bulkDelete('favorites', favorites, {}),
};
