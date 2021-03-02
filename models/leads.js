

module.exports = function (sequelize, DataTypes) {
    var Leads = sequelize.define("Leads", {
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
        opportunity: {
            type: DataTypes.BOOLEAN
        }
    });
    return Leads;
};