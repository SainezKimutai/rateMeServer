const mongoose = require('mongoose');

// Schema
const sellersProfileSchema = new mongoose.Schema({
    companyName : String,
    businessType: String,
    membershipNumber: String,
    companyPictures: {
      picOne: {name: '', url: ''},
      picTwo: {name: '', url: ''},
      picThree: {name: '', url: ''}
    },
    companyDescription: String,
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
      image: {name: String, url: String},
      title: String,
      description: String
    }],
    certification: [],
    productCertification: [{
      image: {name: String, url: String},
      documentName: String,
      productCertified: String,
      certificationBody: String,
      issuanceDate: Date,
      expiryDate: Date,
      tradeMarket: String,
      approvalStatus: String,
      approvalNote: String,
      certificationScope: String
    }],
    productCertificationSummary: String

});

// model
const SellersProfile = mongoose.model('SellersProfile', sellersProfileSchema);

module.exports = { SellersProfile : SellersProfile };
