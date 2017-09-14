'use strict'
module.exports = function (sequelize, DataTypes) {
  var SeekerExp = sequelize.define('SeekerExp', {
    // foreign key
    auth0Id: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    atJob: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        notEmpty: true
      }
    },
    employerName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    inEducation: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      validate: {
        notEmpty: true
      }
    },
    edSector: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    // e.g. Associate
    roleTitle: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    // Assistant Accounting Manager
    jobTitle: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    salary: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  });
  return SeekerExp
}
