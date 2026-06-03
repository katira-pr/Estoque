const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const GuestProfile = sequelize.define('GuestProfile', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    averageConsumption: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    consumptionHabits: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    timestamps: true,
  });

  return GuestProfile;
};
