const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { Types: { ObjectId } } = Schema;

const rentSchema = new Schema({
    car: { type: ObjectId, required: true, ref: 'Car' },
    user: { type: ObjectId, required: true, ref: 'User' },
    date: { type: Date, required: true, },
    days: { type: Number, required: true, },
});

module.exports = model('Rent', rentSchema);