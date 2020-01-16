const purchaseOrderService = require("../services/purchaseOrder.service");


exports.create = (req, res, next) => {
    purchaseOrderService.create(req.body)
        .then(po => res.json(po))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    purchaseOrderService.getAll()
        .then(pos => { res.json(pos);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    purchaseOrderService.getOne(req.params.id)
        .then(po => po ? res.json(po): res.sendStatus(404))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    purchaseOrderService.update(req.params.id, req.body)
        .then((po)=> {res.json(po);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    purchaseOrderService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
