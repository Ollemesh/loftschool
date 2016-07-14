//----- splice( array, start, deleteCount[, item1[, item2[, ...]]] ) -----

module.exports = function(array, start, deleteCount, ...items) {
  let toReturn = [];
  if(start < 0) start = array.length + start;
  if(start > array.length) start = array.length;
  if(deleteCount < 0 ) return toReturn;

  for(let i = 0; i < deleteCount; i++ ) {
    toReturn[toReturn.length] = array[start+i];
  }

  for(let i = 0; i < deleteCount; i++ ) {
    toReturn[toReturn.length] = array[start+i];
  }
  for (let i = start; i < array.length; i++ ) {
    array[i] = array[i+deleteCount];
  }
  array.length -= deleteCount;

  if(items.length) {
    let maxCount = array.length - start;
    for( let i = 0; i < maxCount; i++){
      array[start + items.length + i] = array[start+i];
    }
    for( let i = 0; i < items.length; i++) {
      array[start+i] = items[i];
    }
  }
  return toReturn;
};