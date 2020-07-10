const orgProfileService = require('../services/orgProfile.service');
const customerProfileService = require('../services/customerProfile.service');
const customerRatingService = require('../services/customerRating.service');
const industryService = require('../services/industry.service');
const emojiService = require('../services/emoji.service');
const responseService = require('../services/response.service');
const userService = require('../services/user.service');
const orgBranchService = require('../services/orgBranch.service');



exports.mostFrqRatedOrgByCustomer = (req, res, next) => {
    customerRatingService.getAllByCustomer(req.body.userProfileId)
        .then(rsp => {
          if (rsp.length > 0) {
          const OrgProfileArray = rsp.map(e => e.orgProfileId);
          let counts = OrgProfileArray.reduce((a, c) => {
            a[c] = (a[c] || 0) + 1;
            return a;
          }, {});
          let maxCount = Math.max(...Object.values(counts));
          let mostFrequentOrg = Object.keys(counts).filter(k => counts[k] === maxCount);
          let OrgPrfArr = [];
          mostFrequentOrg.forEach((orgId, i, arr) => {
              let orgRates = rsp.filter((rating) => rating.orgProfileId === orgId).map(e => e);
              orgProfileService.getOne(orgId)
                  .then(orgPrf => {
                    orgPrf.ratingTimes = orgRates.length;
                    OrgPrfArr.push(orgPrf);
                    if (i === arr.length - 1) { res.json(OrgPrfArr) }
                  })
                  .catch(err => next(err));
            });
          } else {
            res.json(rsp)
          }
         })
        .catch(err => next(err));
};



exports.averageSatRateByCustomer = (req, res, next) => {
  customerRatingService.getAllByCustomer(req.body.userProfileId)
      .then(rsp => {
        if (rsp.length > 0) {
        const OrgProfileArray = rsp.map(e => e.orgProfileId);
        let FilterOrgProfile =  Array.from( new Set(OrgProfileArray));
        let OrgPrfArr = [];
        FilterOrgProfile.forEach((orgId, i, arr) => {
          let orgRates = rsp.filter((rating) => rating.orgProfileId === orgId).map(e => e);
          let totalRating = orgRates.reduce((a, b) => a + b.ratingNumber, 0);
          let averageRating = (Number(totalRating) / Number(orgRates.length))
           OrgPrfArr.push({averageRating: averageRating, orgProfileId: orgId})
           if (i === arr.length - 1) { res.json(OrgPrfArr) }
        });

        } else {
          res.json(rsp)
            // console.log(res.json(rsp))
        }
       })
      .catch(err => console.log(err));
}


exports.averageSatRateByOrg = (req, res, next) => {
  customerRatingService.getAllByOrgProfile(req.body.orgProfileId)
      .then(rsp => {
        if (rsp.length > 0) {
        const userProfileArray = rsp.map(e => e.userProfileId);
        let FilterUserProfile =  Array.from( new Set(userProfileArray));
        let UserProfilesArr = [];
        FilterUserProfile.forEach((userId, i, arr) => {
          let userRates = rsp.filter((rating) => rating.userProfileId === userId).map(e => e);
          let totalRating = userRates.reduce((a, b) => a + b.ratingNumber, 0);
          let averageRating = (Number(totalRating)/ Number(userRates.length));
          UserProfilesArr.push({averageRating: averageRating});
          if (i === arr.length - 1) {
              let myTotal = UserProfilesArr.reduce((a, b) => a + b.averageRating, 0);
              res.json({averageRating: myTotal / UserProfilesArr.length});
              console.log(res.json({averageRating: myTotal / UserProfilesArr.length}))
          }

        });

        } else {
          res.json(rsp)
        }
       })
      .catch(err => next(err));
}


exports.mostFrqRatedIndustryByCustomer = (req, res, next) => {
    customerRatingService.getAllByCustomer(req.body.userProfileId)
        .then(rsp => {
          if (rsp.length > 0) {
          const OrgProfileArray = rsp.map(e => e.orgProfileId);
          let IndustryIdsArray = [];
          OrgProfileArray.forEach((orgId, i, arr) => {
            orgProfileService.getOne(orgId)
                  .then(orgPrfRsp => {
                    IndustryIdsArray.push(orgPrfRsp.industryId);
                    if (i === arr.length - 1){
                      let FilterIndustryIdsArray =  Array.from( new Set(IndustryIdsArray));
                      let IndustryArr = [];
                      FilterIndustryIdsArray.forEach((indId, i2, arr2) => {
                          let inds = IndustryIdsArray.filter((id) => id === indId).map(e => e);
                          industryService.getOne(indId)
                              .then(indInfo => {
                                indInfo.ratingTimes = inds.length;
                                IndustryArr.push({industryName: indInfo.industryName, frequencyOfRating: indInfo.ratingTimes});
                                if (i2 === arr2.length - 1) { res.json(IndustryArr) }
                              })
                              .catch(err => next(err));
                        });

                    }
                  })
                  .catch(err => next(err));
          });
          } else {
            res.json(rsp)
          }
         })
        .catch(err => next(err));
};


exports.mostFrqSelectedEmojiByCustomer = (req, res, next) => {
    customerRatingService.getAllByCustomer(req.body.userProfileId)
        .then(rsp => {
          if (rsp.length > 0) {
          const EmojiNameArray = rsp.map(e => e.ratingState);
          let counts = EmojiNameArray.reduce((a, c) => {
              a[c] = (a[c] || 0) + 1;
            return a;
          }, {});
          let maxCount = Math.max(...Object.values(counts));
          let mostFrequentEmoji = Object.keys(counts).filter(k => counts[k] === maxCount);
          let EmojiInfoArr = [];
          let OrgProfArr = [];
          mostFrequentEmoji.forEach((emojiName, i, arr) => {
          let emojiRates = rsp.filter((rating) => rating.ratingState === emojiName).map(e => e);
          emojiService.getOneByName(emojiName)
              .then(emojiRsp => {
                emojiRsp.ratingTimes = emojiRates.length;
                EmojiInfoArr.push(emojiRsp);
                if (i === arr.length - 1) { res.json(EmojiInfoArr) }
              })
              .catch(err => next(err));
        });
          } else {
            res.json(rsp)
          }
         })
        .catch(err => next(err));
};



exports.mostFrqSelectedEmojiByOrg = (req, res, next) => {
  customerRatingService.getAllByOrgProfile(req.body.orgProfileId)
      .then(rsp => {
        if (rsp.length > 0) {
        const EmojiNameArray = rsp.map(e => e.ratingState);
        let counts = EmojiNameArray.reduce((a, c) => {
          a[c] = (a[c] || 0) + 1;
          return a;
        }, {});
        let maxCount = Math.max(...Object.values(counts));
        let mostFrequentEmoji = Object.keys(counts).filter(k => counts[k] === maxCount);
        let EmojiInfoArr = [];
        mostFrequentEmoji.forEach((emojiId, i, arr) => {
            let emojiRates = rsp.filter((rating) => rating.ratingState === emojiId).map(e => e);
            emojiService.getOne(emojiId)
                .then(emojiRsp => {
                  emojiRsp.ratingTimes = emojiRates.length;
                  EmojiInfoArr.push(emojiRsp);
                  if (i === arr.length - 1) { res.json(EmojiInfoArr) }
                })
                .catch(err => next(err));
          });
        } else {
          res.json(rsp)
        }
       })
      .catch(err => next(err));
};



exports.totalNumOfRatingByCustomer = (req, res, next) => {
    customerRatingService.getAllByCustomer(req.body.userProfileId)
        .then(rsp => {
          res.json({totalNumberOfRating: rsp.length});
         })
        .catch(err => next(err));
};


exports.totalNumOfRatingByOrg = (req, res, next) => {
    customerRatingService.getAllByOrgProfile(req.body.orgProfileId)
        .then(rsp => {
          res.json({totalNumberOfRating: rsp.length});
         })
        .catch(err => next(err));
};

exports.totalNumOfRatingByOrg = (req, res, next) => {
    customerRatingService.getAllByOrgProfile(req.body.orgProfileId)
        .then(rsp => {
            res.json({totalNumberOfRating: rsp.length});
        })
        .catch(err => next(err));
};


// This function gets the total of ratingNumber below 50 for every business
exports.totalNumberOfUnpleasantReactionsByOrg = (req,res,next) => {
    customerRatingService.getAllByOrgProfile(req.body.orgProfileId)
        .then(rsp => {
            if(rsp.length > 0) {
              let unpleasantRating = rsp.filter((r) => Number(r.ratingNumber) < 50).map(e => e)
              res.json({totalNumberOfUnpleasantReactions: unpleasantRating.length})
            } else {res.json({totalNumberOfUnpleasantReactions: 0}) }
            }
        )
        .catch(err => next(err));
};

// This function gets the total of ratingNumber from 50 to 100 for every business
exports.totalNumberOfPleasantReactionsByOrg = (req,res,next) => {
    customerRatingService.getAllByOrgProfile(req.body.orgProfileId)
    .then(rsp => {
        if(rsp.length > 0) {
          let unpleasantRating = rsp.filter((r) => Number(r.ratingNumber) > 49 ).map(e => e)
          res.json({totalNumberOfUnpleasantReactions: unpleasantRating.length})
        } else {res.json({totalNumberOfUnpleasantReactions: 0}) }
        }
    )
    .catch(err => next(err));
};


// This function gets the all the questions and responses (issues) from the customer ratings
// The totals of issues raised are calculated and displayed on a stacked bar chart

exports.topIssuesByOrg = (req,res,next) => {
  customerRatingService.getAllByOrgProfile(req.body.orgProfileId)
  .then(rsp => {
      if(rsp.length > 0) {
        let issues = []
        rsp.forEach((resp, i, arr) => {
          resp.questions.forEach((respQuiz, i2, arr2) => {
            respQuiz.responses.forEach((respRes, i3, arr2) => {
              responseService.getOne(respRes)
                .then(respns => {
                  let obj = {
                    responseId: respRes,
                    response: respns.response,
                    data: resp.updatedAt
                  }
                  issues.push(obj)
                  if (i === arr.length - 1 && i2 === arr2.length - 1 && i3 === arr3.length - 1) {
                    res.json(issues)
                  }
                })
                .catch(err => next(err));
            });
          });
        });
      } else {res.json([]) }
      }
  )
  .catch(err => next(err));
};



function gettOpRatersByOrg(userArr) {
  userformated = []
  userArr.forEach((usr, i, arr) => {
    customerProfileService.getOne(usr.userProfId)
        .then(userPfr => {
            userService.getOne(userPfr.userId)
                .then(userInfo => {
                  userformated.push({
                    email: userInfo.email,
                    logo: userPrf.logo,
                    numberOfRating: usr.number
                  })
                  if (i === arr.length - 1) {
                    return userformated;
                  }
                })
                .catch(err => next(err));
        } )
        .catch(err => next(err));
  });
}


// This function gets the top 3 raters for every org.
// Should contain their email, logo, avg sat rate and most freq selected emoji
exports.topRatersByOrg = (req,res,next) => {
  customerRatingService.getAllByOrgProfile(req.body.orgProfileId)
  .then(responses => {
    let userIds = responses.map(e => e.userProfileId )
    let userArr = []
    userIds.forEach((itemId, i, arr) => {
      let myRes = responses.filter((f) => f.userProfileId === itemId).map(e => e);
      userArr.push({userProfId: itemId, number: myRes.length })
      if (i === arr.length - 1) {
          res.json(gettOpRatersByOrg())
      }
    })
  })
  .catch(err => next(err));
};




exports.totalNumberOfRatingsByOrgBranch = (req, res, next) => {
    customerRatingService.getAllByOrgBranch(req.body.orgBranchId)
      .then(rsp => {
          res.json({totalNumberOfRating: rsp.length});
      })
      .catch(err => next(err));
};



exports.averageSatRateByOrgBranch = (req, res, next) => {
    customerRatingService.getAllByOrgBranch(req.body.orgBranchId)
        .then(rsp => {
            if (rsp.length > 0) {
                const userProfileArray = rsp.map(e => e.userProfileId);
                let FilterUserProfile =  Array.from( new Set(userProfileArray));
                let UserProfilesArr = [];
                FilterUserProfile.forEach((userId, i, arr) => {
                    let userRates = rsp.filter((rating) => rating.userProfileId === userId).map(e => e);
                    let totalRating = userRates.reduce((a, b) => a + b.ratingNumber, 0);
                    let averageRating = (Number(totalRating)/ Number(userRates.length));
                    UserProfilesArr.push({averageRating: averageRating});
                    if (i === arr.length - 1) {
                        let myTotal = UserProfilesArr.reduce((a, b) => a + b.averageRating, 0);
                        res.json({averageRating: myTotal / UserProfilesArr.length});
                        console.log(res.json({averageRating: myTotal / UserProfilesArr.length}))
                    }

                });

            } else {
                res.json(rsp)
            }
        })
        .catch(err => next(err));
}



exports.mostFreqSelectedEmojiByOrgBranch = (req,res,next) => {
    customerRatingService.getAllByOrgBranch(req.body.orgBranchId)
        .then(rsp => {
            if (rsp.length > 0) {
                const EmojiNameArray = rsp.map(e => e.ratingState);
                let counts = EmojiNameArray.reduce((a, c) => {
                    a[c] = (a[c] || 0) + 1;
                    return a;
                }, {});
                let maxCount = Math.max(...Object.values(counts));
                let mostFrequentEmoji = Object.keys(counts).filter(k => counts[k] === maxCount);
                let EmojiInfoArr = [];
                mostFrequentEmoji.forEach((emojiId, i, arr) => {
                    let emojiRates = rsp.filter((rating) => rating.ratingState === emojiId).map(e => e);
                    emojiService.getOne(emojiId)
                        .then(emojiRsp => {
                            emojiRsp.ratingTimes = emojiRates.length;
                            EmojiInfoArr.push(emojiRsp);
                            if (i === arr.length - 1) { res.json(EmojiInfoArr) }
                        })
                        .catch(err => next(err));
                });
            } else {
                res.json(rsp)
            }
        })
        .catch(err => next(err));
};



function getToIssuesByBranch(rsp, branch) {
  let issues = []
  rsp.forEach((resp, i, arr) => {
    resp.questions.forEach((respQuiz, i2, arr2) => {
      respQuiz.responses.forEach((respRes, i3, arr2) => {
        responseService.getOne(respRes)
          .then(respns => {
            let obj = {
              branchId: branch._id,
              branchName: branch.branchName,
              responseId: respRes,
              response: respns.response,
              data: resp.updatedAt
            }
            issues.push(obj)
            if (i === arr.length - 1 && i2 === arr2.length - 1 && i3 === arr3.length - 1) {
              return issues
            }
          })
          .catch(err => next(err));
      });
    });
  });
}



// This function gets the age of the customers who have rated a certain business and gets the average age

exports.topIssuesByOrgBranch = (req,res,next) => {

  orgBranchService.getAllByOrgProfileId(req.body.orgProfileId)
      .then(branches => {
        if (branches.length > 0) {
          let AllIssues = []
          branches.forEach((branch, i, arr) => {
            customerRatingService.getAllByOrgBranch(branch._id)
                .then(rsps => {
                  allIssues.concat(getToIssuesByBranch(rsps, branch))
                  if (i === arr.length - 1) {
                    res.json(allIssues)
                  }
                 })
                .catch(err => next(err));
          });
        } else { res.json([])}
      })
      .catch(err => next(err));

};





// This function gets the age of the customers who have rated a certain business and gets the average age

exports.getAvgCustomerAge = (req,res,next) => {


};
