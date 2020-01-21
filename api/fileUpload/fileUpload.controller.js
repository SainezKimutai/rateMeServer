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


exports.uploadBuyersPics = (req, res, next) => {
  fileUploadService.uploadBuyersPics(req)
    .then((e) => (console.log(e),res.json({imageName: e})))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeBuyersPics = (req, res, next) => {
  fileUploadService.removeBuyersPics(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}

exports.uploadProductImage = (req, res, next) => {
  fileUploadService.uploadProductImage(req)
    .then((e) => (console.log(e),res.json({imageName: e})))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeProductImage = (req, res, next) => {
  fileUploadService.removeProductImage(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}

exports.uploadMessageImage = (req, res, next) => {
  fileUploadService.uploadMessageImage(req)
    .then((e) => (console.log(e),res.json({imageName: e})))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeMessageImage = (req, res, next) => {
  fileUploadService.removeMessageImage(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}

exports.uploadSignatures = (req, res, next) => {
  fileUploadService.uploadSignatures(req)
    .then((e) => (console.log(e),res.json({imageName: e})))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removeSignatures = (req, res, next) => {
  fileUploadService.removeSignatures(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}

exports.uploadPaymentProofImage = (req, res, next) => {
  fileUploadService.uploadPaymentProofImage(req)
    .then((e) => (console.log(e),res.json({imageName: e})))
    .catch(err => {res.sendStatus(401); console.log(err)})
}

exports.removePaymentProofImage = (req, res, next) => {
  fileUploadService.removePaymentProofImage(req.params.name)
    .then(()=> res.json({}))
    .catch(err => next(err));
}
