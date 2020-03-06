const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const customerInterestSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  customerProfileId: String,
  interestId: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const CustomerInterest = Model('CustomerInterest', customerInterestSchema);

module.exports = { CustomerInterest : CustomerInterest };
