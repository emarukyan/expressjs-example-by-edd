

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('announcement_type', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      timestamps: false,
  tableName: 'announcement_type'
  });
};
