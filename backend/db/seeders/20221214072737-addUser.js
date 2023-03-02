const { User } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await User.bulkCreate([
      {
        name: 'John Doe',
        email: 'J@D.com',
        password: '12345678',
      },
      {
        name: 'John Lennon',
        email: 'Yoko@mylove@com',
        password: '12345678',
      },
      {
        name: 'John Snow',
        email: 'i@dontnothing.com',
        password: '12345678',
      },
    ]);
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
  },
};
