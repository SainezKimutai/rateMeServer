const orgProfileService = require('../services/orgProfile.service');
const customerProfileService = require('../services/customerProfile.service');
const customerRatingService = require('../services/customerRating.service');


exports.mostRatedOrgByCustomer = (req, res, next) => {
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
          let averageRating = totalRating / orgRates.length
          orgProfileService.getOne(orgId)
              .then(orgPrf => {
                orgPrf.averageRating = averageRating;
                OrgPrfArr.push(orgPrf)
                if (i === arr.length - 1) { res.json(OrgPrfArr) }
              })
              .catch(err => next(err));
        });

        } else {
          res.json(rsp)
        }
       })
      .catch(err => next(err));
}
