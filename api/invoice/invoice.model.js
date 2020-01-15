const mongoose = require('mongoose');

// Schema
const invoiceSchema = new mongoose.Schema({
    invoiceNumber: String,
    invoiceDate: Date,
    invoiceDueDate: Date,
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
const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = { Invoice : Invoice };
