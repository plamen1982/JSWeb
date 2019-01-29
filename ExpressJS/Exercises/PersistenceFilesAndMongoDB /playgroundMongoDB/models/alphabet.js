const mongoose = require('mongoose');
const { Schema } = mongoose;
const alphabetSchema = new Schema({
    name: String,
    letters: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }]
});

module.exports = mongoose.model('Alphabet', alphabetSchema);