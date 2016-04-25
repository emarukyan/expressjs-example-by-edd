

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_rule', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created_at: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    updated_at: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
      timestamps: false,
  tableName: 'auth_rule'
  });
};
