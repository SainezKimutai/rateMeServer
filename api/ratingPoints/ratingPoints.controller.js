const ratingPointsService = require('../services/ratingPoints.service');


exports.create = (req, res, next) => {
    ratingPointsService.create(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    ratingPointsService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    ratingPointsService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.getOneByUserProfileId = (req, res, next) => {
    ratingPointsService.getOneByUserProfileId(req.params.id)
        .then(rsps => { res.json(rsps); })
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    ratingPointsService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.redeem = (req, res, next) => {
    ratingPointsService.getOneByUserProfileId(req.params.profileId)
        .then((response)=> {
          response.points = Number(response.points) - Number(req.body.redeemedPoints)
            console.log(response.points);
          ratingPointsService.update(response._id, response)
              .then((rsp)=> {res.json(rsp);})
              .catch(err => next(err));
        })
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    ratingPointsService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
