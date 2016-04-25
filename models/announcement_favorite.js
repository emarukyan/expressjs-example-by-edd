

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('announcement_favorite', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    announcement_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'announcement',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
      timestamps: false,
  tableName: 'announcement_favorite'
  });
};
