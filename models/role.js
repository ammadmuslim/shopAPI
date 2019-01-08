'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('Role', {
    name: DataTypes.STRING
  }, {});
  role.associate = function(models) {
    // associations can be defined here
  };
  return role;
};