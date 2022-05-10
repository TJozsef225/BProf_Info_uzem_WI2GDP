'use strict';

const {
  Model
} = require('sequelize');
const { moveSyntheticComments } = require('typescript');
module.exports = (sequelize, DataTypes) => {
  class TODO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  let today = new Date();
  TODO.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
      

    },
    description: {
      type: DataTypes.STRING
    },

    dueDate: {
      type: DataTypes.DATE,
      validate: {
        isAfter: '2022-04-24'
      }
    },
    success:  {
      type: DataTypes.BOOLEAN,
      equals: false
  }}, {
    sequelize,
    modelName: 'TODO',
  });
  return TODO;
};