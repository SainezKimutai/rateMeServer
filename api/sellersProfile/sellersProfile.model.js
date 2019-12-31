const mongoose = require('mongoose');

// Schema
const sellersProfileSchema = new mongoose.Schema({
    companyName : String,
    businessType: String,
    membershipNumber: { type: String },
    picture: [],
    description: String,
    telNumber : Number,
    country: String,
    email : String,
    website : String,
    twitter : String,
    instagram : String,
    mainProducts: String,
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
    }],
    productCertificationSummary: String

});

// model
const SellersProfile = mongoose.model('SellersProfile', sellersProfileSchema);

module.exports = { SellersProfile : SellersProfile };
