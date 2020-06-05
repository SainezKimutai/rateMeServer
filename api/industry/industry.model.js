const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const industrySchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  industryName: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const Industry = Model('Industry', industrySchema);

module.exports = { Industry : Industry };
