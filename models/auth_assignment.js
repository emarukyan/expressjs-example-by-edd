

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_assignment', {
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'auth_item',
        key: 'name'
      }
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
      timestamps: false,
  tableName: 'auth_assignment'
  });
};
