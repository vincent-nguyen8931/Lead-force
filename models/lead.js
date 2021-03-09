module.exports = function (sequelize, DataTypes) {
  var Lead = sequelize.define("Lead", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    phone: {
      type: DataTypes.STRING,
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
  
  console.log(Lead)

  return Lead;
};