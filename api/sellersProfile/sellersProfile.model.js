const mongoose = require('mongoose');

// Schema
const sellersProfileSchema = new mongoose.Schema({
    companyName : String,
    businessType: String,
    picture: [],
    description: String,
    managerName : String,
    telNumber : Number,
    country: String,
    email : String,
    website : String,
    twitter : String,
    facebook : String,
    instagram : String,
    mainProducts: [{item: String}],
    totalAnnualRevenue: Number,
    totalEmployees: Number,
    yearEstablished: Number,
    businessCapacity: [{
      image: [],
      title: String,
      description: String
    }],
    certification: [],
    productCertification: [{
      image: String,
      certName: String,
      certifiedBY: String,
      businessScope: String
    }]

});

// model
const SellersProfile = mongoose.model('SellersProfile', sellersProfileSchema);

module.exports = { SellersProfile : SellersProfile };
