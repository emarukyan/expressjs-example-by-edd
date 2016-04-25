var bcrypt = require('bcrypt')

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    },
    referrerid: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    earning_type: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    ipromoter_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    iproducer_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    is_banned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    ban_days: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    is_flagged: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    is_safemode: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: '0'
    },
    auth_key: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_reset_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    account_activation_token: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_at: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    updated_at: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    fb_connect: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fb_link: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'user',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false,
    getterMethods: {},
    instanceMethods: {
      validPassword: function (password, cb) {
        var hash = this.password_hash.replace(/^\$2y(.+)$/i, '\$2a$1')
        bcrypt.compare(password, hash, function (err, res) {
          if (err) {
            console.log(err)
          }
          cb(res)
        })
      }
    }
  })
}
