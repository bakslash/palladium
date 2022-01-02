'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  patients.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    month: DataTypes.STRING,
    county: DataTypes.STRING,
    age: DataTypes.INTEGER,
    facility_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'patients',
  });
  return patients;
};