const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const industrySchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  industryName: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const Industry = Model('Industry', industrySchema);

module.exports = { Industry : Industry };
