const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const responseSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  questionId: String,
  response: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const Response = Model('Response', responseSchema);

module.exports = { Response : Response };
