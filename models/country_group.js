

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country_group', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    groupe_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      timestamps: false,
  tableName: 'country_group'
  });
};
