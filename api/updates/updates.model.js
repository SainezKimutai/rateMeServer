const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;

const updateSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    customerRatingId: String,
    update: String,
    createdAt: { type : Date, default: Date.now },
    updatedAt: { type : Date, default: Date.now }
});

// model
const Update = Model('Update', updateSchema);

module.exports = { Update : Update };
