require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');
const AuthService = require('./auth.service');

// Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false,
  }
);

// Load Models
const User = require('./User')(sequelize);
const Product = require('./Product')(sequelize);
const Category = require('./Category')(sequelize);
const Inventory = require('./Inventory')(sequelize);
const Purchase = require('./Purchase')(sequelize);
const Consumption = require('./Consumption')(sequelize);
const Waste = require('./Waste')(sequelize);
const GuestProfile = require('./GuestProfile')(sequelize);
const HotelOccupancy = require('./HotelOccupancy')(sequelize);

// Define associations
Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

Product.hasMany(Inventory, { foreignKey: 'productId' });
Inventory.belongsTo(Product, { foreignKey: 'productId' });

Product.hasMany(Purchase, { foreignKey: 'productId' });
Purchase.belongsTo(Product, { foreignKey: 'productId' });

Product.hasMany(Consumption, { foreignKey: 'productId' });
Consumption.belongsTo(Product, { foreignKey: 'productId' });

Product.hasMany(Waste, { foreignKey: 'productId' });
Waste.belongsTo(Product, { foreignKey: 'productId' });

// Initialize Services
const authService = new AuthService(User);

// Export for use in controllers and routes
module.exports = {
  sequelize,
  models: {
    User,
    Product,
    Category,
    Inventory,
    Purchase,
    Consumption,
    Waste,
    GuestProfile,
    HotelOccupancy,
  },
  services: {
    authService,
  },
};
