const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const orgBranchSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  orgProfileId: String,
  branchName: String,
  qrCode: { type: Schema.Types.Mixed },
  location: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const OrgBranch = Model('OrgBranch', orgBranchSchema);

module.exports = { OrgBranch : OrgBranch };
