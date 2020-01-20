const mongoose = require('mongoose');

// Schema
const orderSchema = new mongoose.Schema({
    orderBy: String,
    orderTo: String,
    orderNumber: String,
    orderDate: Date,
    orderDueDate: Date,
    orderItem: [{
      name: String,
      price: Number,
      quantity: Number,
      description: String,
      deliveryMethod: String,
      totalPrice: Number
    }],
    signature: {url: String, name: String},
    dateSigned: Date,
    paymentStatus: Boolean,
    orderStatus: String

});

// model
const Order = mongoose.model('Order', orderSchema);

module.exports = { Order : Order };
