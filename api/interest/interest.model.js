const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const interestSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  interestName: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const Interest = Model('Interest', interestSchema);

module.exports = { Interest : Interest };
