module.exports = function (sequelize, DataTypes) {
    var Lead = sequelize.define("Lead", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2]
            }
        },
        phone: {
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
        },
        oppurtunity: {
            type: DataTypes.BOOLEAN
        }
    });
    return Lead;
};