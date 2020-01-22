const mongoose = require('mongoose');

// Schema
const deliverySchema = new mongoose.Schema({
    deliveryOrder: String,
    deliveryFrom: String,
    deliveryTo: String,
    deliveryStatus: { type: String, enum: ['pending', 'ready', 'moving', 'atDestination', 'received'] },
    deliveryService: String,
    deliveryStart: Date,
    deliveryEnd: Date,
    deliveryDocument: {
      docOne: {name: String, url: String},
      docTwo: {name: String, url: String},
      picOne: {name: String, url: String},
      picTwo: {name: String, url: String},
    },
    deliveryRecieved: Boolean
});

// model
const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = { Delivery : Delivery };
