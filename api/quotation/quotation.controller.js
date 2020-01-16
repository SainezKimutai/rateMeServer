const quotationService = require("../services/quotation.service");


exports.create = (req, res, next) => {
    quotationService.create(req.body)
        .then(qot => res.json(qot))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    quotationService.getAll()
        .then(qots => { res.json(qots);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    quotationService.getOne(req.params.id)
        .then(qot => qot ? res.json(qot): res.sendStatus(404))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    quotationService.update(req.params.id, req.body)
        .then((qot)=> {res.json(qot);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    quotationService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
