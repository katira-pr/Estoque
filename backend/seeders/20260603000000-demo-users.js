'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Admin User',
        email: 'admin@estoque.com',
        password: hashedPassword,
        role: 'admin',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manager User',
        email: 'manager@estoque.com',
        password: hashedPassword,
        role: 'manager',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Regular User',
        email: 'user@estoque.com',
        password: hashedPassword,
        role: 'user',
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
