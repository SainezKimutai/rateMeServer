const mongoose = require('mongoose');

// Schema
const receiptSchema = new mongoose.Schema({
    receiptNumber: String,
    receiptDate: Date,
    receiptDueDate: Date,
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
const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = { Receipt : Receipt };
