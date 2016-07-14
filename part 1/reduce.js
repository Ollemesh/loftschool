//----- reduce( array, callback[, initialValue] ) -----

module.exports = function(array, callback, initialValue) {
  previousValue = initialValue || 0;
  if(array.length === 0 && !initialValue) throw new TypeError("ReduceEE of empty array with no initial value");
  else if(array.length === 1 && !initialValue) return array[0];
  else if(array.length === 0 && initialValue) return initialValue;
  for( index in array ) {
    previousValue = callback(previousValue, array[index], index, array);
  }
  return previousValue
};