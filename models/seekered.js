'use strict';
module.exports = function(sequelize, DataTypes) {
  var SeekerEd = sequelize.define('SeekerEd', {
    // foreign key;
    auth0Id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          notEmpty: true,
      }
    },
    // undergrad, grad, phd, cert;
    degreeType: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    schoolName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    // BA, MSC, etc.
    degreeName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    areaOfStudy: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
  });
  return SeekerEd;
};