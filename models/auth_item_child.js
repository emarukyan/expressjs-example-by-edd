

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_item_child', {
    parent: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'auth_item',
        key: 'name'
      }
    },
    child: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'auth_item',
        key: 'name'
      }
    }
  }, {
      timestamps: false,
  tableName: 'auth_item_child'
  });
};
