const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { Types: { ObjectId, String } } = Schema;

const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    isLocked: { type: Boolean, default: false, required: true },
    creationDate: { type: Date, required:true, default: Date.now },
    edits: [{ type: ObjectId, ref: 'Edit' }]
});

module.exports = model('Aricle', articleSchema);