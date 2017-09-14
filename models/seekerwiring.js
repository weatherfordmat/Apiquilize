'use strict';
module.exports = function(sequelize, DataTypes) {
  var SeekerWiring = sequelize.define('SeekerWiring', {
      // foreign key;
      auth0Id: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
      },
      managementPref: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      stucturePref: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      teamWorkPref: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      definedEndAndMeans: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      onlyDefinedEnd: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      onlyBigPicture: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      bigPictureAndExecution: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      // 100 = flexible, 0 = flexible;
      disciplinedScore: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      outgoingScore: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      isPersonalWorkPlace: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true
        }
      },
      canAdvance: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      growingSkills: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
        // must be stringified before submitting;
        // parse on the way out;
        fiveAttr: {
            type: DataTypes.STRING,
            validate: {
                len: [15, 300],
                notEmpty: true,
            }
        }, 
  });
  return SeekerWiring;
};