var express = require('express');

var controller = require('./users.controller');
var router = express.Router();

router.get('/getAll', controller.getAll);
router.get('/getOne/:id', controller.getOne);
router.post('/login', controller.login);
router.post('/register', controller.create);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delete);
router.post('/confirmSellerEmail', controller.confirmSellerEmail);

module.exports = router;
