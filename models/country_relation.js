

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country_relation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    country_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      references: {
        model: 'countries',
        key: 'country_id'
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
  tableName: 'country_relation'
  });
};
