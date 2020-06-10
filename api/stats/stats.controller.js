const orgProfileService = require('../services/orgProfile.service');
const customerProfileService = require('../services/customerProfile.service');
const customerRatingService = require('../services/customerRating.service');
const industryService = require('../services/industry.service');
const emojiService = require('../services/emoji.service');


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
            // console.log(orgRates);
          let totalRating = orgRates.reduce((a, b) => a + b.ratingNumber, 0);
            console.log(totalRating);
          let averageRating = (Number(totalRating) / Number(orgRates.length))
            console.log(averageRating);
          // orgProfileService.getOne(orgId)
          //     .then(orgPrf => {
          //       orgPrf.averageRating = averageRating;
          //       OrgPrfArr.push(orgPrf)
          //       if (i === arr.length - 1) { res.json(OrgPrfArr) }
          //     })
          //     .catch(err => next(err));

           OrgPrfArr.push({averageRating: averageRating, orgId})
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
          // customerProfileService.getOne(userId)
          //     .then(userPrf => {
          //       userPrf.averageRating = averageRating;
          //       UserProfilesArr.push(userPrf)
          //       if (i === arr.length - 1) { res.json(UserProfilesArr) }
          //     })
          //     .catch(err => console.log(err));

          UserProfilesArr.push({averageRating: averageRating})
          if (i === arr.length - 1) { res.json(UserProfilesArr) }

        });

        } else {
          res.json(rsp)
        }
       })
      .catch(err => console.log(err));
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
                                IndustryArr.push(indInfo);
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
