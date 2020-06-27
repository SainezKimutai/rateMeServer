const customerProfileService = require('../services/customerProfile.service');


exports.create = (req, res, next) => {
    customerProfileService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    customerProfileService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    customerProfileService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.getProfileByUserId = (req, res, next) => {
    customerProfileService.getProfileByUserId(req.params.id)
        .then(rsps => { res.json(rsps); })
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    customerProfileService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    customerProfileService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
