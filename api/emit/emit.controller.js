const User = require('../users/users.model.js');
const SellersProfile = require("../sellersProfile/sellersProfile.model.js").SellersProfile;
const BuyersProfile = require("../buyersProfile/buyersProfile.model.js").BuyersProfile;
const Product = require("../product/product.model.js").Product;

module.exports = function(app, io){
    User.find({})
        .then((data)=>{ io.emit('/listUsers', data)})
        .catch((err)=>{ console.log('Could Not emit Users')});

    SellersProfile.find({})
        .then((data)=>{ io.emit('/listSellersProfile', data)})
        .catch((err)=>{ console.log('Could Not emit SellersProfile')});

    BuyersProfile.find({})
        .then((data)=>{ io.emit('/listBuyersProfile', data)})
        .catch((err)=>{ console.log('Could Not emit BuyersProfile')});

    Product.find({})
        .then((data)=>{ io.emit('/listProducts', data)})
        .catch((err)=>{ console.log('Could Not emit Products')});
};
