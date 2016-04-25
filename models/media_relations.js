

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('media_relations', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    media_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    announcement_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    media_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
      timestamps: false,
  tableName: 'media_relations'
  });
};
