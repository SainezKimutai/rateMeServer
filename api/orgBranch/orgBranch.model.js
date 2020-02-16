const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const orgBranchSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  orgProfileId: String,
  branchName: String,
  location: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const OrgBranch = Model('OrgBranch', orgBranchSchema);

module.exports = { OrgBranch : OrgBranch };
