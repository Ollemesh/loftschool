//----- slice( array[, begin[, end]] ) -----

module.exports = function(array, begin, end) {
  begin = begin || 0;
  end = end || array.length;
  if(begin < 0) begin = array.length + begin;
  if(end < 0) end = array.length + end;
  let result = [];
  for(let i = begin; i < end; i++) {
    if( array[i] ) result[result.length] = array[i];
  }
  return result;
};