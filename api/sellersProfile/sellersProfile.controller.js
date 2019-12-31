const sellersProfileService = require("../services/SellersProfile.service");


exports.create = (req, res, next) => {
    sellersProfileService.create(req.body)
        .then(seller => seller ?  res.json(seller): res.status(409).json({ message: 'Seller Exists' }))
        .catch(err => next(err));
};


exports.getAll = (req, res, next) => {
    sellersProfileService.getAll()
        .then(sellers => { res.json(sellers);  })
        .catch(err => next(err));
};


exports.getOne = (req, res, next) => {
    sellersProfileService.getOne(req.params.id)
        .then(seller => seller ? res.json(seller): res.sendStatus(404))
        .catch(err => next(err));
};

exports.getByName = (req, res, next) => {
    sellersProfileService.getByName(req.params.name)
        .then(seller => seller ? res.json(seller):  res.status(401).json({ message: 'No seller'}))
        .catch(err => next(err));
};


exports.update = (req, res, next) => {
    sellersProfileService.update(req.params.id, req.body)
        .then((seller)=> {res.json(seller);})
        .catch(err => next(err));
};


exports.delete = (req, res, next) => {
    sellersProfileService.delete(req.params.id)
        .then(()=> {res.json({});})
        .catch(err => next(err));
};
