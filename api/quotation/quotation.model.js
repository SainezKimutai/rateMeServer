const mongoose = require('mongoose');

// Schema
const quotationSchema = new mongoose.Schema({
    quotationNumber: String,
    quotationDate: Date,
    quotationDueDate: Date,
    item: [{
      name: String,
      price: Number,
      quantity: Number,
      description: String,
      deliveryMethod: String,
      totalPrice: Number
    }]
});

// model
const Quotation = mongoose.model('Quotation', quotationSchema);

module.exports = { Quotation : Quotation };
