

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('query_history', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    query: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    checksum: {
      type: DataTypes.STRING,
      allowNull: false
    },
    view: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
      timestamps: false,
  tableName: 'query_history'
  });
};
