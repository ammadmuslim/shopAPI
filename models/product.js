'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    image_url: DataTypes.STRING 
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};