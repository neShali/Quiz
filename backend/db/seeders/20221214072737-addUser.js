const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate([
      {
        name: 'Vasya',
      },
      {
        name: 'Petya',
      },
      {
        name: 'Ivan',
      },
    ]);
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
  },
};
