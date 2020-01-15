const messagingService = require("../services/messaging.service");


exports.create = (req, res, next) => {
    messagingService.create(req.body)
        .then(msg => res.json(msg))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    messagingService.getAll()
        .then(msgs => { res.json(msgs);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    messagingService.getOne(req.params.id)
        .then(msg => msg ? res.json(msg): res.sendStatus(404))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    messagingService.update(req.params.id, req.body)
        .then((msg)=> {res.json(msg);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    messagingService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
