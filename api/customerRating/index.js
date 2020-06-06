const express = require('express');

const controller = require('./customerRating.controller');
const router = express.Router();

router.post('/create', controller.create);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.get('/getAllByCustomer/:id', controller.getAllByCustomer);
router.get('/getAllByOrgProfile/:id', controller.getAllByOrgProfile);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;
