'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      sku: {
        type: Sequelize.STRING,
        unique: true
      },
      unitOfMeasure: {
        type: Sequelize.STRING,
        defaultValue: 'unit'
      },
      minimumQuantity: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      maximumQuantity: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      currentPrice: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0
      },
      isPerishable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      expirationDays: {
        type: Sequelize.INTEGER
      },
      active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};
