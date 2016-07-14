//----- filter( array, callback[, thisArg] ) -----

module.exports = function(array, callback, thisArg) {
  if(thisArg) callback = callback.bind(thisArg);
  let result = [];
  for( index in array ) {
    if( callback(array[index], index, array) ) result[result.length] = array[index];
  }
  return result;
};