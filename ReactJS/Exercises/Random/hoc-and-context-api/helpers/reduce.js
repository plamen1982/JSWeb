const reduce = (array, callback) => {
    let result = array[0];
    for(let nextElement of array.slice(1)) {
        result = callback(result, nextElement)
    }
    return result;
}