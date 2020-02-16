const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const orgProfileSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  companyName: String,
  industryId: String,
  logo: {name: String, url: String},
  residence: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const OrgProfile = Model('OrgProfile', orgProfileSchema);

module.exports = { OrgProfile : OrgProfile };
