

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('media', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    media_path: {
      type: DataTypes.STRING,
      allowNull: false
    },
    media_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    media_type: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    media_description: {
      type: DataTypes.STRING,
      allowNull: false
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
  tableName: 'media'
  });
};
