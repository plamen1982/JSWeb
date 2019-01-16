const fs = require('fs');
let storage = {
  a: 'a',
  b: 'b',
  c: 'c',
  d: 'd',
  e: 'e',
};
const fileName = 'storage.json';
module.exports = {

  put: (key, value, callback) => {
    if(typeof key === 'string') {
      if(storage[key]) {
        storage[key] = value;
        callback(storage[key])
      } else {
        throw new Error('The key doesnt exist');
      }
    } else {
      throw new Error('The key should be string');
    }
  },

  get: (key, callback) => {
    if(storage[key]) {
      callback(storage[key]);
    }
  },

  getAll: (callback) => {
    const allKeys = Object.keys(storage);
    if(allKeys.length === 0) {
      throw new Error('The memory is empty')
    }
    allKeys.forEach(key => {
      console.log(`${key}:${storage[key]}`)
    });
    callback(storage);
  },

  update: (key, value, callback) => {
    if(typeof key === 'string') {
      if(storage[key]) {
        storage[key] = value;
        callback(storage[key]);
      } else {
        throw new Error('The key doesnt exist');
      }
    } else {
      throw new Error('The key should be string');
    }
  },

  delete: (key, callback) => {
    if(storage[key]) {
      delete storage[key];
      callback(storage);
    } else {
      throw new Error('The key doesnt exist in the memory');
    }
  },

  clear: (callback) => {
    const allKeys = Object.keys(storage);
    if(allKeys.length === 0 ) {
      throw new Error('The memory is empty')
    }
    allKeys.forEach(key => {
      delete storage[key];
    });
    callback(storage);
  },

  save: (fileName, callback) => {
   fs.writeFile(fileName, JSON.stringify(storage), '', (error) => {
      if(error) throw new Error(`the ${fileName} is not saved`);
      callback('file is saved');
   })
  },

  load: (callback) => {
    if(fs.existsSync(`./${fileName}`)) {
      fs.readFile(`./${fileName}`, (error, data) => {
        if(error) throw new Error(`we could not find your file ${fileName}`);
        storage = JSON.parse(data);
        console.log('file is loaded');
        callback(storage);
      })
    } else {
      console.log(`we could not find your file: ${fileName}`);
    }
  }
}