

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_item', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rule_name: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: 'auth_rule',
        key: 'name'
      }
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
  tableName: 'auth_item'
  });
};
