const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { Types: { ObjectId, String, Date } } = Schema;

const articleSchema = new mongoose.Schema({
    author: { type: ObjectId, ref: 'User', required: true },
    article: { type: ObjectId, ref: 'Article', required: true },
    creationDate: { type: Date, default: Date.now, required: true },
    content: { type: String, required: true }
});

module.exports = model('Aricle', articleSchema);