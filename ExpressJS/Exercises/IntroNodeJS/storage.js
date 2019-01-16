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

  put: (key, value) => {
    if(typeof key === 'string') {
      if(storage[key]) {
        storage[key] = value;
      } else {
        throw new Error('The key doesnt exist');
      }
    } else {
      throw new Error('The key should be string');
    }
  },

  get: (key) => {
    if(storage[key]) {
      return storage[key];
    }
  },

  getAll: () => {
    const allKeys = Object.keys(storage);
    if(allKeys.length === 0) {
      throw new Error('The memory is empty')
    }
    allKeys.forEach(key => {
      console.log(`${key}:${storage[key]}`)
    });
  },

  update: (key, value) => {
    if(typeof key === 'string') {
      if(storage[key]) {
        storage[key] = value;
      } else {
        throw new Error('The key doesnt exist');
      }
    } else {
      throw new Error('The key should be string');
    }
  },

  delete: (key) => {
    if(storage[key]) {
      delete storage[key];
    } else {
      throw new Error('The key doesnt exist in the memory');
    }
  },

  clear: () => {
    const allKeys = Object.keys(storage);
    if(allKeys.length === 0 ) {
      throw new Error('The memory is empty')
    }
    allKeys.forEach(key => {
      delete storage[key];
    })
  },

  save: () => {
   fs.writeFile(fileName, JSON.stringify(storage), '', (error) => {
      if(error) throw new Error(`the ${fileName} is not saved`);
      console.log('file is saved')
   })
  },

  load: () => {
    if(fs.existsSync(`./${fileName}`)) {
      fs.readFile(`./${fileName}`, (error, data) => {
        if(error) throw new Error(`we could not find your file ${fileName}`);
        storage = JSON.parse(data);
        console.log('file is loaded')
      })
    } else {
      console.log(`we could not find your file: ${fileName}`);
    }
  }
}