const mongoose = require('mongoose');
const lettersSchema = new mongoose.Schema({
    numberOfTheLetter: { type: Number, required: true },
    letterName:{ type: String, required: true, unique: true } ,
    isVowel: { type: Boolean },
});

//Avoid arrow functions;
lettersSchema.methods.getInfo = function(err) {
    if(err) throw err;
    return `Letter name: ${this.letterName}\n IsVowel: ${this.isVowel}`;
};

//virtual properties are not persisted into the database and they are accessible on all models
lettersSchema.virtual('getLetterInfo', function(err) {
    if(err) throw err;
    return `Letter name: ${this.letterName}\n IsVowel: ${this.isVowel}`;
})

//property validation

lettersSchema.path('numberOfTheLetter')
                .validate(function() {
                    return this.numberOfTheLetter > 0 && this.numberOfTheLetter < 31;
                }, 'Letter should be with number between 1 and 30');

const lettersModel = mongoose.model('Letters', lettersSchema);
module.exports = lettersModel; 