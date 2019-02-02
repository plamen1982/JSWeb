const fs = require('fs');

let dbPath = './db/db.json';
let db = [];

const load = () => {

  return new Promise ((resolve,reject) => {
    fs.readFile(dbPath, (err, data) => {
      if(err) {
        reject(err);
      }  
      resolve(JSON.parse(data));
    });
  });
}

const save = () => {
  return new Promise((resolve, reject)=> {
    fs.writeFile(dbPath, JSON.stringify(db), (err) => {
      if(err){
        reject(err);
      }
      resolve();
    });
  });
}

let add = (meme) => {
  db.push(meme);
}

let dbCopy = db.map(item => item);

module.exports = {
  load:load,
  save:save,
  getDb:dbCopy,
  add:add,
}
