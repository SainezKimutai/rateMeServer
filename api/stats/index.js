const express = require('express');

const controller = require('./stats.controller');
const router = express.Router();

router.post('/mostFrqRatedOrgByCustomer', controller.mostFrqRatedOrgByCustomer); // pass  { userProfileId: ''}
router.post('/averageSatRateByCustomer', controller.averageSatRateByCustomer); // pass { userProfileId : '' }
router.post('/averageSatRateByOrg', controller.averageSatRateByOrg); // pass { orgProfileId: '' }
router.post('/mostFrqRatedIndustryByCustomer', controller.mostFrqRatedIndustryByCustomer); // pass { userProfileId: '' }
router.post('/mostFrqSelectedEmojiByCustomer', controller.mostFrqSelectedEmojiByCustomer); // pass { userProfileId: '' }
router.post('/mostFrqSelectedEmojiByOrg', controller.mostFrqSelectedEmojiByOrg); // pass { orgProfileId: '' }
router.post('/totalNumOfRatingByCustomer', controller.totalNumOfRatingByCustomer); // pass { userProfileId: '' }
router.post('/totalNumOfRatingByOrg', controller.totalNumOfRatingByOrg);
router.post('/averageSatRateByOrgBranch', controller.averageSatRateByOrgBranch);
router.post('/mostFreqSelectedEmojiByOrgBranch', controller.mostFreqSelectedEmojiByOrgBranch);// pass { orgProfileId: '' }
router.post('/totalNumOfRatingByOrgBranch', controller.totalNumberOfRatingsByOrgBranch);
router.post('/totalNumberOfUnpleasantReactionsByOrg', controller.totalNumberOfUnpleasantReactionsByOrg);
router.post('/totalNumberOfPleasantReactionsByOrg', controller.totalNumberOfPleasantReactionsByOrg);
router.post('/gettOpRatersByOrg', controller.gettOpRatersByOrg);
router.post('/topRatersByOrg', controller.topRatersByOrg);
router.post('/topIssuesByOrg', controller.topIssuesByOrg);
router.post('/topIssuesByOrgBranch', controller.topIssuesByOrgBranch);






module.exports = router;
