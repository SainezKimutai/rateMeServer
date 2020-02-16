const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const userInterestSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userProfileId: String,
  interestId: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const UserInterest = Model('UserInterest', userInterestSchema);

module.exports = { UserInterest : UserInterest };
