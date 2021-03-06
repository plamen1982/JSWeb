const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const carSchema = new Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String },
    carUrl: { type: String, required: true },
    pricePerDay: { type: Number, required: true },
    isRented: { type: Boolean, default: false },
});

module.exports = model('Car', carSchema);