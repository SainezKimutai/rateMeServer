const questionService = require('../services/question.service');
const ratingRangeService = require('../services/ratingRange.service');


exports.create = (req, res, next) => {
    questionService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    questionService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    questionService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.getAllByRangeIndustry = (req, res, next) => {
  ratingRangeService.getAll()
      .then(AllRanges => {
        AllRanges.forEach((range) => {
          if (range.minimumRange  <= req.body.rangeNumber && range.maximumRange >= req.body.rangeNumber) {
            questionService.getAllByRangeIndustry({rangeId : range._id, industryId: req.body.industryId})
            .then(rsps => { res.json(rsps);  })
            .catch(err => next(err));
          }
        });

       })
      .catch(err => next(err));
};


exports.update = (req, res, next) => {
    questionService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    questionService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
