

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country_group_announcement_relation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country_groupe_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'country_group',
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
  tableName: 'country_group_announcement_relation'
  });
};
