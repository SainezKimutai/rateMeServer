const userService = require('../services/user.service');
const mailConfirmationService = require('../services/mailConfirmation.service');

exports.login = (req, res, next) => {

    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(401).json({ message: 'Email or password is incorrect' }))
        .catch(err => next(err));

};


  exports.create = (req, res, next) => {
      userService.create(req.body)
          .then(user => user ? res.json(user) : res.status(409).json({ message: 'User already Exists' }))
          .catch(err => next(err));

  };

  exports.getAll = (req, res, next) => {
      userService.getAll()
          .then(users => { res.json(users); })
          .catch(err => next(err));
  };

  exports.getOne = (req, res, next) => {
      userService.getOne(req.params.id)
          .then(user => user ? res.json(user) : res.sendStatus(404))
          .catch(err => next(err));
  };

  exports.update = (req, res, next) => {
      userService.update(req.params.id, req.body)
          .then((user)=> res.json(user))
          .catch(err => next(err));
  };

  exports.delete = (req, res, next) => {
      userService.delete(req.params.id)
          .then(()=> res.json({}))
          .catch(err => next(err));
  };

  exports.delete = (req, res, next) => {
      userService.delete(req.params.id)
          .then(()=> res.json({}))
          .catch(err => next(err));
  };

  exports.confirmSellerEmail = (req, res, next) => {
      mailConfirmationService.sellerEmail(req.body)
          .then(()=> res.json({}))
          .catch(err => next(err));
  };

  exports.confirmBuyerEmail = (req, res, next) => {
      mailConfirmationService.buyerEmail(req.body)
          .then(()=> res.json({}))
          .catch(err => next(err));
  };
