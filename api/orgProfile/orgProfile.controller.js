const orgProfileService = require('../services/orgProfile.service');


exports.create = (req, res, next) => {
    orgProfileService.create(req.body)
        .then(rsp => {
          orgProfileService.generateQRCode(rsp._id).then((url)=> {
            orgProfileService.update(rsp._id, {qrCode : url})
                .then((rsp)=> {res.json(rsp);})
                .catch(err => next(err));
          })
        })
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    orgProfileService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    orgProfileService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};

exports.getByUserId = (req, res, next) => {
    orgProfileService.getByUserId(req.body)
        .then(rsp => res.json(rsp))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    orgProfileService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    orgProfileService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
