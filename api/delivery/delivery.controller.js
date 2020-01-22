const deliveryService = require("../services/delivery.service");


exports.create = (req, res, next) => {
    deliveryService.create(req.body)
        .then(dlv => res.json(dlv))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    deliveryService.getAll()
        .then(dlvs => { res.json(dlvs);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    deliveryService.getOne(req.params.id)
        .then(dlv => dlv ? res.json(dlv): res.sendStatus(404))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    deliveryService.update(req.params.id, req.body)
        .then((dlv)=> {res.json(dlv);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    deliveryService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
