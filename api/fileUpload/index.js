const express = require('express');

const controller = require('./fileUpload.controller.js');
const router = express.Router();

router.post('/uploadProdCert', controller.uploadProdCert);
router.delete('/removeProdCert/:name', controller.removeProdCert);

router.post('/uploadBusnessCap', controller.uploadBusnessCap);
router.delete('/removeBusnessCap/:name', controller.removeBusnessCap);

router.post('/uploadCompanyPics', controller.uploadCompanyPics);
router.delete('/removeCompanyPics/:name', controller.removeCompanyPics);

router.post('/uploadBuyersPics', controller.uploadBuyersPics);
router.delete('/removeBuyersPics/:name', controller.removeBuyersPics);

router.post('/uploadProductImage', controller.uploadProductImage);
router.delete('/removeProductImage/:name', controller.removeProductImage);

module.exports = router;
