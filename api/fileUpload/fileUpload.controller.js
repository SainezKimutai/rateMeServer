const fileUploadService = require("../services/fileUpload.service.js");



exports.uploadProdCert = (req, res, next) => {
  fileUploadService.uploadProdCert(req)
    .then((e) => (console.log(e),res.json({imageName: e})))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeProdCert = (req, res, next) => {
  fileUploadService.removeProdCert(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}



exports.uploadBusnessCap = (req, res, next) => {
  fileUploadService.uploadBusnessCap(req)
    .then((e) => (console.log(e),res.json({imageName: e})))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeBusnessCap = (req, res, next) => {
  fileUploadService.removeBusnessCap(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}


exports.uploadCompanyPics = (req, res, next) => {
  fileUploadService.uploadCompanyPics(req)
    .then((e) => (console.log(e),res.json({imageName: e})))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeCompanyPics = (req, res, next) => {
  fileUploadService.removeCompanyPics(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}
