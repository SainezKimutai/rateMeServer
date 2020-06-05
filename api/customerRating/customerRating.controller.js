const customerRatingService = require('../services/customerRating.service');


exports.create = (req, res, next) => {
    customerRatingService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    customerRatingService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    customerRatingService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.getAllByCustomer = (req, res, next) => {
    customerRatingService.getAllByCustomer(req.params.id)
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    customerRatingService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    customerRatingService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
