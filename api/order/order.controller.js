const orderService = require("../services/order.service");


exports.create = (req, res, next) => {
    orderService.create(req.body)
        .then(ord => res.json(ord))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    orderService.getAll()
        .then(ords => { res.json(ords);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    orderService.getOne(req.params.id)
        .then(ord => ord ? res.json(ord): res.sendStatus(404))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    orderService.update(req.params.id, req.body)
        .then((ord)=> {res.json(ord);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    orderService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
