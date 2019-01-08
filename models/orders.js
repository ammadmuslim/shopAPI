'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('Orders', {
    product_id: DataTypes.STRING,
    qty: DataTypes.STRING,
    price: DataTypes.STRING,
    transaction_id: DataTypes.STRING
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
    orders.belongsTo(models.Product,{
        foreignKey: 'product_id'
    })
  };
  return orders;
};