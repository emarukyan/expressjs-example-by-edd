

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('session', {
    id: {
      type: 'CHAR(64)',
      allowNull: false,
      primaryKey: true
    },
    expire: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    data: {
      type: 'LONGBLOB',
      allowNull: false
    }
  }, {
      timestamps: false,
  tableName: 'session'
  });
};
