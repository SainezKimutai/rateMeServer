const productService = require("../services/product.service");


exports.create = (req, res, next) => {
    productService.create(req.body)
        .then(product => product ?  res.json(product): res.status(409).json({ message: 'product Exists' }))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    productService.getAll()
        .then(products => { res.json(products);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    productService.getOne(req.params.id)
        .then(product => product ? res.json(product): res.sendStatus(404))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    productService.update(req.params.id, req.body)
        .then((product)=> {res.json(product);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    productService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
