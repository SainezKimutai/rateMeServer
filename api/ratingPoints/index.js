const express = require('express');

const controller = require('./ratingPoints.controller');
const router = express.Router();

router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.put('/update/:id', controller.update);
router.get('/getOneByUserProfileId/:id', controller.getOneByUserProfileId);
router.put('/redeem/:profileId', controller.redeem);
router.delete('/delete/:id', controller.delete);

module.exports = router;
