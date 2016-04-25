

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('businnes_company_relation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    announcement_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
      timestamps: false,
  tableName: 'businnes_company_relation'
  });
};
