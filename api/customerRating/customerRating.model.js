const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const customerRatingSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userProfileId: String,
  orgProfileId: String,
  questionId: String,
  responseId: String,
  possibleSolutionId: String,
  ratingNumber: Number,
  ratingState: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const CustomerRating = Model('CustomerRating', customerRatingSchema);

module.exports = { CustomerRating : CustomerRating };
