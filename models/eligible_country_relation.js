

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('eligible_country_relation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    eligible_country_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'eligible_country',
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
  tableName: 'eligible_country_relation'
  });
};
