

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('language_relation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    language_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'language',
        key: 'id'
      }
    },
    announcement_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'announcement',
        key: 'id'
      }
    }
  }, {
      timestamps: false,
  tableName: 'language_relation'
  });
};
