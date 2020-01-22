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

router.post('/uploadMessageImage', controller.uploadMessageImage);
router.delete('/removeMessageImage/:name', controller.removeMessageImage);

router.post('/uploadSignatures', controller.uploadSignatures);
router.delete('/removeSignatures/:name', controller.removeSignatures);

router.post('/uploadPaymentProofImage', controller.uploadPaymentProofImage);
router.delete('/removePaymentProofImage/:name', controller.removePaymentProofImage);

router.post('/uploadDeliveryDocument', controller.uploadDeliveryDocument);
router.delete('/removeDeliveryDocument/:name', controller.removeDeliveryDocument);

module.exports = router;
