'use strict'
module.exports = function (sequelize, DataTypes) {
  var SeekerSkills = sequelize.define('SeekerSkills', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    auth0Id: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    skillYears: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    // langauge, programming, etc.
    skillType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    // Spanish, Java, etc.
    skillName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    // turn everything into a number. . .
    // makes it easier for machine learning later.
    speakerProf: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    readProf: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    writeProf: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    skillScore: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  });
  return SeekerSkills
}
