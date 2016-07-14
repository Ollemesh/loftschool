//forEach(array, callback[, thisArg])

module.exports = function(array, callback, thisArg) {
  if(thisArg) callback = callback.bind(thisArg);
  for( index in array ) {
    callback(array[index], index, array);
  }
};
