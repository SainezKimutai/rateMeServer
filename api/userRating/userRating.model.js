const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const userRatingSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  orgProfileId: String,
  userProfileId: String,
  possibleSolutionId: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const UserRating = Model('UserRating', userRatingSchema);

module.exports = { UserRating : UserRating };
