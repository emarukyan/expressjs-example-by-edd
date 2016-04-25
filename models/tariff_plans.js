

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tariff_plans', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tariff_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tariff_price: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    announcement_number: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
      timestamps: false,
  tableName: 'tariff_plans'
  });
};
