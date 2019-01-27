const mongodb = require('mongodb');
const  { MongoClient } = mongodb;
let connectionStr = 'mongodb://localhost:27017';
const client = new MongoClient(connectionStr, { useNewUrlParser: true });
client.connect((err) => {
    const db = client.db('newDB');
    const letters = db.collection('letters');

    // letters.insertOne({e: 'e'}, (err, result) => {
    //     if(err) throw err
    //     console.log(result.toString())
    // });

    letters.find({b: 'b'}).count().then((lettersB) => {
        console.log(lettersB);
    })
});