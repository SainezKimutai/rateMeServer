const User = require('../users/users.model.js');
const SellersProfile = require("../sellersProfile/sellersProfile.model.js").SellersProfile;

module.exports = function(app, io){
    User.find({})
        .then((data)=>{ io.emit('/listUsers', data)})
        .catch((err)=>{ console.log('Could Not emit Users')});

    SellersProfile.find({})
        .then((data)=>{ io.emit('/listSellersProfile', data)})
        .catch((err)=>{ console.log('Could Not emit SellersProfile')});
};
