const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const responseSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  questionId: String,
  response: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const Response = Model('Response', responseSchema);

module.exports = { Response : Response };
