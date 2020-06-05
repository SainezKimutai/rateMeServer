const express = require('express');

const controller = require('./stats.controller');
const router = express.Router();

router.post('/mostRatedOrgByCustomer', controller.mostRatedOrgByCustomer);
router.post('/averageSatRateByCustomer', controller.averageSatRateByCustomer);

module.exports = router;
