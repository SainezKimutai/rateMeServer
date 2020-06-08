const ratingRangeService = require('../services/ratingRange.service');


exports.create = (req, res, next) => {
    ratingRangeService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    ratingRangeService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    ratingRangeService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.getAllByRangeNumber = (req, res, next) => {
    ratingRangeService.getAll()
        .then(AllRanges => {
            AllRanges.forEach((range) => {
                if (range.minimumRange  <= req.body.rangeNumber && range.maximumRange >= req.body.rangeNumber) {
                    ratingRangeService.getAllByRangeNumber(range._id)
                        .then(rsps => { res.json(rsps);  })
                        .catch(err => next(err));
                }
            });

        })
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    ratingRangeService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    ratingRangeService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
