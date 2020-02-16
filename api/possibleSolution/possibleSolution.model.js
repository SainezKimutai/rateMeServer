const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

// Schema
const possibleSolutionSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  responseId: String,
  solution: String,
  createdAt: Date,
  updatedAt: Date
});

// model
const PossibleSolution = Model('PossibleSolution', possibleSolutionSchema);

module.exports = { PossibleSolution : PossibleSolution };
