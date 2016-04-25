module.exports = function (sequelize, DataTypes) {
  return sequelize.define('announcement', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true
    },
    event_start: {
      type: DataTypes.DATE,
      allowNull: true
    },
    event_end: {
      type: DataTypes.DATE,
      allowNull: true
    },
    link_to_original: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    eligibility: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    does_it_cover: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    further_information: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    venue: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    participation_fee: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    summer_schools: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    news: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    company_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'businnes_company',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    publish_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    is_featured: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tariff_plan: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    hide_featured_image: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hide_ads: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
      timestamps: false,
  tableName: 'announcement'
  })
}
