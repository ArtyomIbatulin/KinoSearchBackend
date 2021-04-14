'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Category, {
        foreignKey: 'category',
      });
      this.belongsToMany(models.User, { through: 'user_film', as: 'film' });
    }
  }
  Film.init(
    {
      poster: DataTypes.STRING,
      name: DataTypes.STRING,
      desc: DataTypes.STRING,
      description: DataTypes.STRING,
      stars: DataTypes.INTEGER,
      category: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Film',
    }
  );
  return Film;
};
