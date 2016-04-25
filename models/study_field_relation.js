

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('study_field_relation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    study_field_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'study_field',
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
  tableName: 'study_field_relation'
  });
};
