'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('Transactions', {
    total: DataTypes.STRING
  }, {});
  transactions.associate = function(models) {
    // associations can be defined here
   
  };
  return transactions;
};