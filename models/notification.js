'use strict';

module.exports = function(sequelize, DataTypes) {
  var Notification = sequelize.define('Notification', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    auth0Id: {
      type: DataTypes.STRING,
      validate: {
          notEmpty: true,
      }
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    sub: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    read: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    archived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    emailed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    sender: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    }
  });
  return Notification;
};