'use strict';
module.exports = function(sequelize, DataTypes) {
    var WorkExp = sequelize.define('WorkExp', {
        yearsOfExp: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                isIn: [
                    ["1-2", "2-5", "5-7", "7-10", "10-20", "20+"]
                ]
            }
        },
        involvesDirectReports: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            validate: {
                notEmpty: true,
            }
        },
        managesManagers: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        numEmployeesUnder: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 75],
                notEmpty: true,
            }
        },
        /* ----------------- STEP 5, page 3 ------------------------------ */
        budgetResp: {
            type: DataTypes.STRING,
            defaultValue: "<$100,000",
            validate: {
                len: [5, 30],
                notEmpty: true,
            }
        },
        /* ----------------- STEP 5, page 4 ------------------------------ */
        fromOrgType: {
            type: DataTypes.STRING,
            defaultValue: "All",
            validate: {
                notEmpty: true,
                len: [2, 150],
            }
        },
        fromOrgName: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [2, 250],
            }
        },
        fromFellowShip: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [2, 250],
            }
        },
        /* ----------------- STEP 5, page 5 ------------------------------ */
        areasExpertise: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [2, 1000],
            }
        },
        /* ----------------- STEP 5, page 6 ------------------------------ */
        // My Questions do not necessary follow page order at this point.
        primaryExpertiseScore: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        secondaryExpertiseScore: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        tertiaryExpertiseScore: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        }
    });
    return WorkExp;
};