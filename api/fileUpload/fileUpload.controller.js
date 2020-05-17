const fileUploadService = require("../services/fileUpload.service.js");


exports.uploadOrgLogo = (req, res, next) => {
  fileUploadService.uploadOrgLogo(req)
    .then((e) => (res.json(e)))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeOrgLogo = (req, res, next) => {
  fileUploadService.removeOrgLogo(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}

exports.uploadUserLogo = (req, res, next) => {
  fileUploadService.uploadUserLogo(req)
    .then((e) => (res.json(e)))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeUserLogo = (req, res, next) => {
  fileUploadService.removeUserLogo(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}
