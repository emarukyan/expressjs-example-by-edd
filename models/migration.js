

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('migration', {
    version: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    apply_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
      timestamps: false,
  tableName: 'migration'
  });
};
