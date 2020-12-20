const { genres } = require('../sampledata/sample_data.js');

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert('genres', genres, {}),
  down: (queryInterface) => queryInterface.bulkDelete('genres', genres, {}),
};
