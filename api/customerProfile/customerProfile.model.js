const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const customerProfileSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  userId: String,
  username: String,
  logo: {name: String, url: String},
  dob: Date,
  interest: [],
  residence: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const CustomerProfile = Model('CustomerProfile', customerProfileSchema);

module.exports = { CustomerProfile : CustomerProfile };
