'use strict';

const { Theme } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Theme.bulkCreate([
      {
        title: 'Кино',
      },
      {
        title: 'Обо всем',
      },
      {
        title: 'Для смекалки',
      },
      {
        title: 'Хардкор',
      },
    ]);
  },

  async down() {
    await Theme.destroy({ truncate: { cascade: true } });
  },
};
