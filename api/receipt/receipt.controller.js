const receiptService = require("../services/receipt.service");


exports.create = (req, res, next) => {
    receiptService.create(req.body)
        .then(rct => res.json(rct))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    receiptService.getAll()
        .then(rcts => { res.json(rcts);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    receiptService.getOne(req.params.id)
        .then(rct => rct ? res.json(rct): res.sendStatus(404))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    receiptService.update(req.params.id, req.body)
        .then((rct)=> {res.json(rct);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    receiptService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
