const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const questionSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  orgProfileId: String,
  templateId: String,
  ratingRangeId: String,
  question: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const Question = Model('Question', questionSchema);

module.exports = { Question : Question };
