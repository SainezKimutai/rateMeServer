const mongoose = require('mongoose');

// Schema
const purchaseOrderSchema = new mongoose.Schema({
    purchaseOrderNumber: String,
    purchaseOrderDate: Date,
    purchaseOrderDueDate: Date,
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
const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);

module.exports = { PurchaseOrder : PurchaseOrder };
