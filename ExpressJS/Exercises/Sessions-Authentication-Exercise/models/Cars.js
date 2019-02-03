const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const carSchema = new Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    carUrl: { type: String, required: true },
    pricePerDay: { type: Number, required: true },
    rent: { type: Boolean, required: true, default: false },
});

module.exports = model('Car', carSchema);