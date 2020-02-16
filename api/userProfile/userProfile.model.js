const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const userProfileSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userId: String,
  username: String,
  logo: {name: String, url: String},
  dob: Date,
  residence: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const UserProfile = Model('UserProfile', userProfileSchema);

module.exports = { UserProfile : UserProfile };
