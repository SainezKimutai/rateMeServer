const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const questionSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  industryId: String,
  ratingRangeId: String,
  question: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const Question = Model('Question', questionSchema);

module.exports = { Question : Question };
