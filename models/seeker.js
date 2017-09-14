'use strict';
module.exports = function(sequelize, DataTypes) {
  var JobSeeker = sequelize.define('JobSeeker', {
        auth0Id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                notEmpty: true,
            }
        },
        migratedFromTypeform: {
          type: DataTypes.BOOLEAN,
        },
        // used by typeform;
        // id to connect multiple tables;
        networkId: {
          type: DataTypes.STRING
        },
        // Need to Finish What Section;
        nextRoute: {
          type: DataTypes.STRING,
          defaultValue: 'basic',
          validate: {
            notEmpty: true,
          }
        },
        // not used, but there in case things change;
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                notEmpty: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        jobStatus: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
        },
        // can have multiple values. Stringify and Parse.
        // Can have Part-time and Contract.
        roleHours: {
            type: DataTypes.STRING,
            defaultValue: "Full-Time (40+ hours/week)",
            validate: {
                notEmpty: true,
            }
        },
        lengthEmployment: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
        },
        availableStartDate: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
        },
        canWorkInUS: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
          validate: {
            notEmpty: true,
          }
        },
        // an explanation if the above question is false;
        legalExplanation: {
          type: DataTypes.STRING,
        },
        currentMetroArea: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
        },
        lookingWhere: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
            isIn: [
                ["Here", "Some", "Every"],
            ],
          }
        },
        someWhere: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
        },
        // i'd pack up today;
        primaryGeo: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
        },
        // job must be awesome to pack up;
        secondaryGeo: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
        },
        fullTimeSalary: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
        },
        fullTimeSalaryForSecondaryGeo: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
        },
        partTimeHourly: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
        },
        highestEducation: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
        },
        yearsOfFullTime: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
      },
      // e.g. [Banking, Consulting, Accounting]
      // not really needed;
      // but `may` improve efficiency to use;
      areasOfExpertise: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      hopefulExpertiseAreas: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      missionScore: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      compensationScore: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      environmentScore: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      lengthEmploymentScore: {
         type: DataTypes.INTEGER,
         validate: {
          notEmpty: true,
        }
      },
      fullTimeScore: {
         type: DataTypes.INTEGER,
         validate: {
          notEmpty: true,
        }
      },
      resumeLink: {
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
      addressOne: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
      // suite, apartment, floor numbers, etc.
      addressTwo: {
            type: DataTypes.STRING,
      },
      city: {
            type: DataTypes.STRING,
      },
      state: {
            type: DataTypes.STRING,
      },
      zipCode: {
            type: DataTypes.STRING,
      },
      linkedinURL: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      twitterHandle: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      numEmployeesUnder: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 300],
                notEmpty: true,
            }
        },
    budgetResp: {
            type: DataTypes.STRING,
            defaultValue: "<$100,000",
            validate: {
                len: [3, 300],
                notEmpty: true,
            }
        },
      gender: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          }
      },
      ethnicity: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      workInPersonScore: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      workVirtualScore: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      workMixVirtualPerson: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      workFlex: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        }
      },
      reasonForChange: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      // your association
      fromSpecificOrg: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      specificOrgType: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      idealSize: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      idealGrowthStage: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      canTravelOvernight: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      howMuchTravel: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      affiliations: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        }
      },
      referralType: {
            type: DataTypes.STRING
        }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
            // has many educational experiences;
            (models.JobSeeker).hasMany((models.SeekerEd), {
                foreignKey: 'auth0Id',
            });
            
            // has many past jobs;
            (models.JobSeeker).hasMany((models.SeekerExp), {
                foreignKey: 'auth0Id',
            });

            // expertise and skills and combined here;
            (models.JobSeeker).hasMany((models.SeekerSkills), {
                foreignKey: 'auth0Id',
            });
            // *has one section of Personal Wiring
            (models.JobSeeker).hasMany((models.SeekerWiring), {
                foreignKey: 'auth0Id',
            });

            // many messages can be sent from and to JobSeekers;
            (models.JobSeeker).hasMany((models.Notification));

            // Job Seeker Has Many Matches From Employers;
            (models.JobSeeker).hasMany((models.Match));
       }
    }
  });
  return JobSeeker;
};