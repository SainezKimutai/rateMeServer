const rfqService = require("../services/rfq.service");


exports.create = (req, res, next) => {
    rfqService.create(req.body)
        .then(qot => res.json(qot))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    rfqService.getAll()
        .then(qots => { res.json(qots);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    rfqService.getOne(req.params.id)
        .then(qot => qot ? res.json(qot): res.sendStatus(404))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    rfqService.update(req.params.id, req.body)
        .then((qot)=> {res.json(qot);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    rfqService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
