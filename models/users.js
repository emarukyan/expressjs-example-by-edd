module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        age: {
            type: DataTypes.INTEGER,
        },
        country: {
            type: DataTypes.STRING(150),
        }
    }, {
        tableName: 'users',
        timestamps: false,
        getterMethods: {}
    });


    return Users;
};
