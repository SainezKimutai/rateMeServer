const userService = require('../services/user.service');
const customerProfileService = require('../services/customerProfile.service');

exports.login = (req, res, next) => {
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(401).json({ message: 'Email or password is incorrect' }))
        .catch(err => next(err));
};

exports.create = (req, res, next) => {
    userService.create(req.body)
        .then(user => {
          if (user) {
            if (user.userType === 'customer') {
              customerProfileService.create({userId: user._id, username: req.body.username})
                  .then(userPrf => {user.userProfileId = userPrf._id; res.json(userPrf)})
                  .catch(err => next(err));
            } else {
                res.json(userProfileId)
            }
          } else {
            res.status(409).json({ message: 'User already Exists' })
          }
        })
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
exports.deleteAll = (req, res, next) => {
    userService.deleteAll()
        .then(()=> res.json({}))
        .catch(err => next(err));
};
