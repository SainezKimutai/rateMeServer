const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const possibleSolutionSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  responseId: String,
  solution: String,
  createdAt: { type : Date, default: Date.now },
  updatedAt: { type : Date, default: Date.now }
});

// model
const PossibleSolution = Model('PossibleSolution', possibleSolutionSchema);

module.exports = { PossibleSolution : PossibleSolution };
