const express = require('express');

const controller = require('./emoji.controller');
const router = express.Router();

router.post('/create', controller.create);
router.post('/getAllByRangeNumber', controller.getAllByRangeNumber);
router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;
