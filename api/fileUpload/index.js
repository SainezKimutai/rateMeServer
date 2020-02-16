const express = require('express');

const controller = require('./fileUpload.controller.js');
const router = express.Router();

router.post('/uploadOrgLogo', controller.uploadOrgLogo);
router.delete('/removeOrgLogo/:name', controller.removeOrgLogo);

router.post('/uploadUserLogo', controller.uploadUserLogo);
router.delete('/removeUserLogo/:name', controller.removeUserLogo);

module.exports = router;
