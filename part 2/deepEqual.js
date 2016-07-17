// function deepEqual(arrA, arrB)
// Cравнение объектов. Не учитывает различия в дескрипторах свойств. Не "видит" enumerable:false свойства.

let deepEqual = function(objA, objB) {
  //Если хоть один из аргументов не объект, вернем false. Такое условие актуально для рекурсивного вызова.
  if(typeof objA != "object" || typeof objB != "object") return false;
  //Сравним ссылки
  if(objA === objB) return true;
  //Cравним количества свойств/методов
  if(Object.keys(objA).length != Object.keys(objB).length) return false;

  for(prop in objA) {
    //Если у objB нет ключа prop, вернем false:
    if(!(prop in objB)) return false;
    //Если свойство Массив, вызовем функцию сравнения массивов
    else if(Array.isArray(objA[prop])) { if(arrayEqual(objA[prop], objB[prop])) continue; else return false; }
    //Если свойство объект рекурсивно вызовем deepEqual
    else if(typeof objA[prop] === 'object' ) { if(deepEqual(objA[prop], objB[prop])) continue; else return false; }
    //Если свойство примитивнй тип, просто сравним его
    else if(objA[prop] != objB[prop]) return false;
  }
  return true;
};

// Функция сравнения массивов
function arrayEqual(arrA, arrB) {
  //проверка длин и что аргументы массивоподобны
  if( arrA.length != arrB.length ) return false;
  //Сравним ссылки
  if(arrA === arrB) return true;

  for( let i = 0; i < arrA.length; i++ ) {
    //Если элемент массив, рекурсивно вызовем arrayEqual
    if(Array.isArray(arrA[i])) { if(arrayEqual(arrA[i], arrB[i])) continue; else return false; }
    //Если элемент объект вызовем deepEqual
    else if(typeof arrA[i] === 'object' ) { if(deepEqual(arrA[i], arrB[i])) continue; else return false; }
    //Если элемент примитивнй тип, просто сравним его
    else if(arrA[i] != arrB[i]) return false;
  }
  return true;
};

module.exports = deepEqual;