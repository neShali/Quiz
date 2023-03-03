const bcrypt = require('bcrypt');
const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate([
      {
        name: 'John Doe',
        email: 'J@D.com',
        password: await bcrypt.hash('12345678', 10)
      },
      {
        name: 'John Lennon',
        email: 'Yoko@mylove@com',
        password: await bcrypt.hash('12345678', 10),
      },
      {
        name: 'John Snow',
        email: 'i@dontnothing.com',
        password: await bcrypt.hash('12345678', 10),
      },
    ]);
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
  },
};
