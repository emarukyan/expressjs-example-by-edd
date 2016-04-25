

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_tariff', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tariff_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    announcement_left: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: 'CURRENT_TIMESTAMP'
    }
  }, {
      timestamps: false,
  tableName: 'user_tariff'
  });
};
