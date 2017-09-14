'use strict';

module.exports = function(sequelize, DataTypes) {
    var Company = sequelize.define('Company', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        hasSignedContract: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        contractExpirationDate: {
            type: DataTypes.STRING
        },
        companyImg: {
            type: DataTypes.STRING,
            defaultValue: "https://placeholdit.imgix.net/~text?txtsize=33&w=400&h=250",
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
        organization: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [2, 40],
                notEmpty: true,
            }
        },
        website: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            validate: {
                len: [10, 30],
                notEmpty: true,
            }
        },
        // street and number;
        hqAddressOne: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 120],
                notEmpty: true,
            }
        },
        // suite, apartment, floor numbers, etc.
        hqAddressTwo: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [5, 100]
            }
        },
        // D, a river-city in Oregon, United States
        // https://en.wikipedia.org/wiki/List_of_short_place_names
        // cities can be shorter than you think.
        hqCity: {
            type: DataTypes.STRING,
            validate: {
                len: [2, 105],
                notEmpty: true,
            }
        },
        hqState: {
            type: DataTypes.STRING,
            validate: {
                len: [4, 135],
                notEmpty: true,
            }
        },
        zipCode: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 9],
                notEmpty: true,
            }
        },
        metroArea: {
            type: DataTypes.STRING,
            validate: {
                len: [2, 105],
                notEmpty: true,
            }
        },
        orgType: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 105],
                notEmpty: true,
            }
        },
        // textbox. 150 Chars.
        orgMission: {
            type: DataTypes.STRING,
            validate: {
                len: [25, 300],
                notEmpty: true,
            }
        },
        // optional; Change 'No Pref' => 'Skip'
        currentSize: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 20],
            }
        },
        // optional; Change 'No Pref' => 'Skip'
        growthStage: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 30],
            }
        },
        /* ----------------- STEP 2, page 4 ------------------------------ */
        // must be stringified before submitting;
        // parse on the way out;
        fiveAttr: {
            type: DataTypes.STRING,
            validate: {
                len: [15, 70],
                notEmpty: true,
            }
        },
        /* ----------------- STEP 2, page 5 ------------------------------ */
        // alternatively, could translate to numbers for better parsing.
        // optional;
        fostersRelations: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 55],
            }
        },
        openToProfessionalDev: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 55],
            }
        },
        workLifeBalance: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 55],
            }
        },
        // optional;
        canAdvance: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 25],
            }
        },
        /* ----------------- STEP 2, page 6 ------------------------------ */
        referralType: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 100],
                notEmpty: true,
            }
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                (models.Company).hasMany((models.Notification));
            }
        }
    });
    return Company;
};