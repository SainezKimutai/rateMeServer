const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const orgProfileSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  businessName: String,
  industryId: String,
  logo: {name: String, url: String},
  location: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const OrgProfile = Model('OrgProfile', orgProfileSchema);

module.exports = { OrgProfile : OrgProfile };
