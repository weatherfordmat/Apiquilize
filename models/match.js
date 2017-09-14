'use strict';
module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define('Match', {
    shareWithApplicant: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    status: {
      type: DataTypes.STRING,
    },
    stage: {
      type: DataTypes.STRING,
    },
    applicantAccepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    // percent 0 - 100 they match.
    matchPercent: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true,
      }
    },
    hidden: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    reasonDeclined: {
      type: DataTypes.STRING
    }
  });
  return Match;
};