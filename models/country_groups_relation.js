

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country_groups_relation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country_group_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'country_group',
        key: 'id'
      }
    },
    country_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'countries',
        key: 'country_id'
      }
    }
  }, {
      timestamps: false,
  tableName: 'country_groups_relation'
  });
};
