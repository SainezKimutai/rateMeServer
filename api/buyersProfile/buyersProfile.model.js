const mongoose = require('mongoose');

// Schema
const buyersProfileSchema = new mongoose.Schema({
    name : String,
    membershipNumber:  String,
    picture: {name: '', url: ''},
    productsOfInterest: [],
    description: String,
    telNumber : Number,
    country: String,
    email : String,
});

// model
const BuyersProfile = mongoose.model('BuyersProfile', buyersProfileSchema);

module.exports = { BuyersProfile : BuyersProfile };
