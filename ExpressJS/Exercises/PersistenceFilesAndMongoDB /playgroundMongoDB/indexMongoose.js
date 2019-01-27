const mongoose = require('mongoose');
const connectionStr = 'mongodb://localhost:27017/newDB';
const Letter = require('./lettersModel');

mongoose.connect(connectionStr, (err) => {
    if(err) throw err;
    new Letter({
        numberOfTheLetter: 1,
        letterName: 'a' ,
        isVowel: true,
    }).save()
        .then(letter => {
            console.log(letter._id)
        })
})