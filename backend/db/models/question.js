'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Theme}) {
      Question.belongsTo(Theme, {foreignKey: 'theme_id'})
    }
  }
  Question.init({
    theme_id: {
      type: DataTypes.BIGINT,
      references: {
        model: 'Themes',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    question: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    points: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};