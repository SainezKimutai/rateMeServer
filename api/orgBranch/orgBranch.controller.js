const orgBranchService = require('../services/orgBranch.service');


exports.create = (req, res, next) => {
    orgBranchService.create(req.body)
        .then(orgBranch => {
          orgBranchService.generateQRCode(orgBranch._id)
          .then(url => {
            orgBranch.qrCode = url;
            orgBranchService.update(orgBranch._id, orgBranch)
                .then((rsp)=> {res.json(rsp);})
                .catch(err => next(err));
          })
        })
        .catch(err => next(err));
};

exports.getAll = (req, res, next) => {
    orgBranchService.getAll()
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.getOne = (req, res, next) => {
    orgBranchService.getOne(req.params.id)
            .then(rsp => rsp ? res.json(rsp): res.sendStatus(404))
            .catch(err => next(err));
};


exports.getAllByOrgProfileId = (req, res, next) => {
    orgBranchService.getAllByOrgProfileId(req.params.id)
        .then(rsps => { res.json(rsps);  })
        .catch(err => next(err));
};

exports.update = (req, res, next) => {
    orgBranchService.update(req.params.id, req.body)
        .then((rsp)=> {res.json(rsp);})
        .catch(err => next(err));
};

exports.delete = (req, res, next) => {
    orgBranchService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
