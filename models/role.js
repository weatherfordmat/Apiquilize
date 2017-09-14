'use strict';
module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        auth0Id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        hasBeenFilled: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
          validate: {
            notEmpty: true,
          }
        },
        fullDescription: {
            type: DataTypes.TEXT,
            validate: {
                len: [30, 5000],
                notEmpty: true,
            }
        },
        roleTitle: {
            type: DataTypes.STRING,
            validate: {
                len: [2, 70],
                notEmpty: true,
            }
        },
        jobTitle: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 100],
                notEmpty: true,
            }
        },
        startDate: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        latestStartDate: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        /* ----------------- STEP 3, page 3 ------------------------------ */
        roleHours: {
            type: DataTypes.STRING,
            defaultValue: "Full-Time (40+ hours/week)",
            validate: {
                notEmpty: true,
            }
        },
        roleLength: {
            type: DataTypes.STRING,
            defaultValue: "Ongoing",
            validate: {
                notEmpty: true,
            }
        },
        isInPerson: {
            type: DataTypes.STRING,
            defaultValue: "In-person",
            validate: {
                notEmpty: true,
            }
        },
        /* ----------------- STEP 3, page 4, 5 ------------------------------ */
        // Single = > JSON.stringify({ "city":"Houston"});
        // All = > JSON.stringify({ "city":"*"});
        // Double = > JSON.stringify({ "city":"Houston, Austin, LA"});
        geoFlex: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [1, 300],
            }
        },
        /* ----------------- STEP 3, page 6 ------------------------------ */
        // E.G. $20,000 - $30,000
        salaryBaseFT: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 100],
                notEmpty: true,
            }
        },
        salaryStretchFT: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 100],
                notEmpty: true,
            }
        },
        /* ----------------- STEP 3, page 7 ------------------------------ */
        salaryBasePT: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 100],
                notEmpty: true,
            }
        },
        salaryStretchPT: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 100],
                notEmpty: true,
            }
        },
        /* ----------------- STEP 3, page 8 ------------------------------ */
        canTravel: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        percentTravel: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,

            }
        },
        /* ----------------- STEP 3, page 9 ------------------------------ */
        teamWorkStyle: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [20, 300]
            }
        },
        /* ----------------- STEP 3, page 11 ------------------------------ */
        managementStyle: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [10, 200]
            }
        },
        /* ----------------- STEP 3, page 12 ------------------------------ */
        // 0 = flexible, 100 = disciplined;
        applicantFlexibility: {
            type: DataTypes.INTEGER,
            validate: {
                max: 100,
                min: 0,
                isInt: true,
            }
        },
        // 0 = introverted, 100 = extroverted;
        applicantIntroversion: {
            type: DataTypes.INTEGER,
            validate: {
                max: 100,
                min: 0,
                isInt: true,
            }
        },
        // can upload a file as a description;
        uploadURL: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                (models.Company).hasMany((models.Role));
                
                (models.Company).hasMany((models.Employer));

                (models.Role).hasOne(models.Education, {
                    foreignKey: 'id',
                });
                (models.Role).hasOne(models.WorkExp, {
                    foreignKey: 'id',
                });
                // has many areas of skill;
               (models.Role).hasMany((models.SeekerSkills));   
               
               (models.Role).hasMany((models.Match));
            }
        }
    });
    return Role;
};