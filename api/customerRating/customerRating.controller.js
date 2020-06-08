const customerRatingService = require('../services/customerRating.service');
const ratingPointsService = require('../services/ratingPoints.service');

async function addUserRatingPoints(param) {
    ratingPointsService.getOneByUserProfileId(param.userProfileId)
    .then(rsp => {
      if (rsp){
        rsp.points = rsp.points + 10;
        ratingPointsService.update(rsp._id, rsp)
          .then(rsps => { })
          .catch(err => console.log(err));
      } else {
        ratingPointsService.create({userProfileId: param.userProfileId, points: 10 })
          .then(rsps => { })
          .catch(err => console.log(err));
      }
     })
    .catch(err => console.log(err));
}

exports.create = (req, res, next) => {
    customerRatingService.create(req.body)
        .then(rsp => {
          addUserRatingPoints(req.body);
          res.json(rsp)
         })
        .catch(err => console.log(err));
};

exports.getAll = (req, res, next) => {
    customerRatingService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    customerRatingService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.getAllByCustomer = (req, res, next) => {
    customerRatingService.getAllByCustomer(req.params.id)
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getAllByOrgProfile = (req, res, next) => {
    customerRatingService.getAllByOrgProfile(req.params.id)
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    customerRatingService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    customerRatingService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
