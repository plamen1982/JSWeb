const mongoose = require('mongoose');
const connectionStr = 'mongodb://localhost:27017';
const Letter = require('./models/letter');
const Alphabet = require('./models/alphabet');

mongoose.connect(connectionStr, (err) => {
    if(err) throw err;
    new Letter({ 
        numberOfTheLetter: 1,
        letterName: 'a',
        isVowel: true,
     })
})