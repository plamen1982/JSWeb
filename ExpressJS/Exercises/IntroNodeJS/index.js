
// const storage = require('./storage');
const storageAsync = require('./storageWithCallBack');

storageAsync.put('b', 'b is also here', (data) => {
    console.log(`Saved data: ${data}`);
});

storageAsync.get('b', (data) => {
    console.log(`The data for this key in the storage is: ${data}`)
});

storageAsync.getAll((data) => {
    console.log(`All data in the storage is:`);
    console.log(data);
});

storageAsync.save('storageAsync.json', (message) => {
    console.log(message);
});

storageAsync.clear((clearedStorage) => {
    console.log(`The current storage is empty:`);
    console.log(clearedStorage);
});

