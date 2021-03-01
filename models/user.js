var bcrypt = require("bcrypt");



module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        password: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [10]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        }
    });
    return User;
};