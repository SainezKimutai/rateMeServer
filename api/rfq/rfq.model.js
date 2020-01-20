const mongoose = require('mongoose');

// Schema
const rfqSchema = new mongoose.Schema({
    rfqNumber: String,
    rfqDate: Date,
    rfqDueDate: Date,
    rfqProductName: String,
    rfqProductDescription: String,
});

// model
const RFQ = mongoose.model('RFQ', rfqSchema);

module.exports = { RFQ : RFQ };
