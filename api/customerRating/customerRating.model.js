const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const customerRatingSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  orgProfileId: String,
  customerProfileId: String,
  possibleSolutionId: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const CustomerRating = Model('CustomerRating', customerRatingSchema);

module.exports = { CustomerRating : CustomerRating };
