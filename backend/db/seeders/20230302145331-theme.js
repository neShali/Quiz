'use strict';

const { Theme } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Theme.bulkCreate([
      {
        title: 'Мульти-пульти',
      },
      {
        title: 'Кино, вино и домино',
      },
      {
        title: 'Ранее в сериале...',
      },
    ]);
  },

  async down() {
    await Theme.destroy({ truncate: { cascade: true } });
  },
};
