const mongoose = require('mongoose');

// Schema
const productSchema = new mongoose.Schema({
    name : String,
    subCategory: { index: Number, name: String},
    price: Number,
    sellingQuantity: String,
    deliveryPrice: Number,
    deliveryMethod: String,
    minimumOrder: String,
    sellersMembershipNumber: String,
    publishStatus: String,
    image: {
      imageOne: {name: '', url: ''},
      imageTwo: {name: '', url: ''},
      imageThree: {name: '', url: ''},
      imageFour: {name: '', url: ''}
    },
    availability: String,
    info: String,
    description: String,
    specification: [
      {spec: String, value: String},
    ],
    comment: [{
      name: String,
      email: String,
      message: String,
      timePosted: Date
    }],
    review: [{
      name: String,
      email: String,
      message: String,
      rating: Number,
      timePosted: Date
    }],
    createdOn: Date
});

// model
const Product = mongoose.model('Product', productSchema);

module.exports = { Product : Product };
