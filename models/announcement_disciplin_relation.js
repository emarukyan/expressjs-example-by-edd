module.exports = function (sequelize, DataTypes) {
  return sequelize.define('announcement_disciplin_relation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    announcement_disciplin_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'announcement_disciplin',
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
  tableName: 'announcement_disciplin_relation'
  })
}
