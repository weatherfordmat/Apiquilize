'use strict';
module.exports = function(sequelize, DataTypes) {
    var Education = sequelize.define('Education', {
        /* ----------------- STEP 4, page 2 ------------------------------ */
        requireUndergrad: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        requireGrad: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        /* ----------------- STEP 4, page 3 ------------------------------ */
        listGradDegrees: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [2, 50],
            }
        },
        /* ----------------- STEP 4, page 4 ------------------------------ */
        studyType: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [5, 500],
            }
        },
        /* ----------------- STEP 4, page 5 ------------------------------ */
        // if they do use target Unis it will be placed here, if not, it will be ignored.
        targetUnis: {
            type: DataTypes.STRING,
            validate: {
                len: [2, 1000],
            }
        },
    });
    return Education;
};