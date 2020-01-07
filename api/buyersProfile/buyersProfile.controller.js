const buyersProfileService = require("../services/buyersProfile.service");


exports.create = (req, res, next) => {
    buyersProfileService.create(req.body)
        .then(buyer => buyer ?  res.json(buyer): res.status(409).json({ message: 'buyer Exists' }))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    buyersProfileService.getAll()
        .then(buyers => { res.json(buyers);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    buyersProfileService.getOne(req.params.id)
        .then(buyer => buyer ? res.json(buyer): res.sendStatus(404))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    buyersProfileService.update(req.params.id, req.body)
        .then((buyer)=> {res.json(buyer);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    buyersProfileService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
