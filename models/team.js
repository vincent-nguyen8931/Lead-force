

module.exports = function (sequelize, DataTypes) {
    var Team = sequelize.define("Team", {
        department: {
            type: DataTypes.STRING,
            unique: true
        }

    });
    return Team;
};