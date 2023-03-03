'use strict';

const { Point } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Point.bulkCreate([
      {
        user_id: 1,
        score: 0,
      },
      {
        user_id: 2,
        score: 0,
      },
      {
        user_id: 3,
        score: 0,
      },
    ]);
  },

  async down() {
    await Point.destroy({ truncate: { cascade: true } });
  },
};
