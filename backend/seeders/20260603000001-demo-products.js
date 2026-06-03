'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert sample categories
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Bebidas',
        description: 'Bebidas em geral (café, suco, leite)',
        abcClassification: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alimentos Perecíveis',
        description: 'Alimentos que deterioram rapidamente',
        abcClassification: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Alimentos Não Perecíveis',
        description: 'Alimentos com vida útil prolongada',
        abcClassification: 'B',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Itens de Café da Manhã',
        description: 'Pão, manteiga, geleia, etc',
        abcClassification: 'A',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    // Insert sample products
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Café Coado',
        description: 'Café coado para café da manhã',
        categoryId: 1,
        sku: 'CAFE-001',
        unitOfMeasure: 'litro',
        minimumQuantity: 5,
        maximumQuantity: 20,
        currentPrice: 8.50,
        isPerishable: false,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leite Integral',
        description: 'Leite integral pasteurizado',
        categoryId: 1,
        sku: 'LEITE-001',
        unitOfMeasure: 'litro',
        minimumQuantity: 10,
        maximumQuantity: 30,
        currentPrice: 4.50,
        isPerishable: true,
        expirationDays: 7,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pão Francês',
        description: 'Pão francês fresco diário',
        categoryId: 4,
        sku: 'PAO-001',
        unitOfMeasure: 'unidade',
        minimumQuantity: 50,
        maximumQuantity: 150,
        currentPrice: 0.50,
        isPerishable: true,
        expirationDays: 1,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Manteiga',
        description: 'Manteiga para café da manhã',
        categoryId: 2,
        sku: 'MANT-001',
        unitOfMeasure: 'kg',
        minimumQuantity: 2,
        maximumQuantity: 8,
        currentPrice: 15.00,
        isPerishable: true,
        expirationDays: 14,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Geléia de Morango',
        description: 'Geléia de morango para café da manhã',
        categoryId: 3,
        sku: 'GEL-001',
        unitOfMeasure: 'kg',
        minimumQuantity: 2,
        maximumQuantity: 6,
        currentPrice: 12.00,
        isPerishable: false,
        active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
