

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('google_analytics', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    page_view: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    unique_view: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    post_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    page_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
      timestamps: false,
  tableName: 'google_analytics'
  });
};
