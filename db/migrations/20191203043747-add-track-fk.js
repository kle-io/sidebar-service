module.exports = {
  up: (queryInterface) => queryInterface.addConstraint('tracks', ['albumId'],
    {
      type: 'foreign key',
      references: {
        table: 'albums',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),

  down: (queryInterface) => queryInterface.removeConstraint('tracks', 'foreign key'),
};
