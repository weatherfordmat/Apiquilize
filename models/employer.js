'use strict';
module.exports = function(sequelize, DataTypes) {
  var Employer = sequelize.define('Employer', {
     auth0Id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
            validate: {
                notEmpty: true,
            }
        },
        // Need to Finish What Section;
        nextRoute: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'signup',
                    validate: {
                    notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                    isEmail: true,
                notEmpty: true,
            }
        },
        userImg: {
            type: DataTypes.STRING,
            validate: {
            notEmpty: true
            }
        },
        firstName: {
            type: DataTypes.STRING,
            validate: {
                len: [2, 25],
                notEmpty: true,
            }
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                len: [2, 35],
                notEmpty: true,
            }
        },
        currentJobLevel: {
            type: DataTypes.STRING,
            validate: {
                isIn: [
                    ['Consultant/Contractor', 'Assistant', 'Analyst', 'Associate', 'Manager', 'Director', 'Senior Director', 'Executive Director', 'Vice President', 'Senior Vice President', 'President', 'C-Level', 'CEO']
                ]
            }
        },
        currentJobTitle: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 25],
                notEmpty: true,
                is: /^[a-z\s]+$/i, // only letters;
            }
        },
  });
  return Employer;
};