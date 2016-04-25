

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('language', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    native_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ISO639_1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    list_order: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    is_public: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
      timestamps: false,
  tableName: 'language'
  });
};
