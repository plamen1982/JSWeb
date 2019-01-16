
const storage = require('./storage');
storage.put('a', 'the new a is here and it will stay for a while');
storage.save();
storage.load();
storage.getAll();
storage.save();