'use strict';

module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    CustomerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    SupportRepId: DataTypes.INTEGER,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Company: DataTypes.STRING,
    Address: DataTypes.STRING,
    City: DataTypes.STRING,
    State: DataTypes.STRING,
    Country: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Fax: DataTypes.STRING,
    Email: DataTypes.STRING

  }, {
    tableName: 'Customer',
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Customer.belongsTo(models.Employee, {foreignKey: "SupporRepId"});
        Customer.hasMany(models.Invoice, {foreignKey: "CustomerId"})
      }
    }
  });

  return Customer;
};