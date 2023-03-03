'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Point }) {
      this.hasMany(Point, { foreignKey: 'user_id'})
    }
  }
  User.init({
    name: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    email: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};