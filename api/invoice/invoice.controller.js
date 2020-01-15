const invoiceService = require("../services/invoice.service");


exports.create = (req, res, next) => {
    invoiceService.create(req.body)
        .then(inv => res.json(inv))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    invoiceService.getAll()
        .then(invs => { res.json(invs);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    invoiceService.getOne(req.params.id)
        .then(inv => inv ? res.json(inv): res.sendStatus(404))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    invoiceService.update(req.params.id, req.body)
        .then((inv)=> {res.json(inv);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    invoiceService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
