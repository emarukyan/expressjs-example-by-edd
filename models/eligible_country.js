module.exports = function (sequelize, DataTypes) {
  return sequelize.define('eligible_country', {
    country_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    iso2: {
      type: 'CHAR(2)',
      allowNull: true
    },
    short_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    long_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    iso3: {
      type: 'CHAR(3)',
      allowNull: true
    },
    numcode: {
      type: DataTypes.STRING,
      allowNull: true
    },
    un_member: {
      type: DataTypes.STRING,
      allowNull: true
    },
    calling_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cctld: {
      type: DataTypes.STRING,
      allowNull: true
    },
    meta_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    page_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    media_url: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'eligible_country'
  })
}
