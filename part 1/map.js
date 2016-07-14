//----- map( array, callback[, thisArg] ) -----

module.exports = function(array, callback, thisArg) {
  if(thisArg) callback = callback.bind(thisArg);
  let result = [];
  for( index in array ) {
    result[index] = callback(array[index], index, array);
  }
  return result;
};